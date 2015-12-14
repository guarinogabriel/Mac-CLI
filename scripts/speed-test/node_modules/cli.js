#!/usr/bin/env node
'use strict';
var meow = require('meow');
var speedtest = require('speedtest-net');
var updateNotifier = require('update-notifier');
var roundTo = require('round-to');
var chalk = require('chalk');
var logUpdate = require('log-update');
var logSymbols = require('log-symbols');
var elegantSpinner = require('elegant-spinner');
var url = require('url');

var cli = meow({
	help: [
		'Usage',
		'  $ speed-test',
		'',
		'Options',
		'  --json     Output the result as JSON',
		'  --verbose  Output more detailed information'
	]
});

updateNotifier({pkg: cli.pkg}).notify();

var stats = {
	ping: '',
	download: '',
	upload: ''
};

var state = 'ping';
var frame = elegantSpinner();

function getSpinner(x) {
	return state === x ? chalk.gray.dim(frame()) : ' ';
}

function render() {
	if (cli.flags.json) {
		console.log(JSON.stringify(stats));
		return;
	}

	var output = [
		'',
		'      Ping ' + getSpinner('ping') + ' ' + stats.ping,
		'  Download ' + getSpinner('download') + ' ' + stats.download,
		'    Upload ' + getSpinner('upload') + ' ' + stats.upload
	];

	if (cli.flags.verbose) {
		output = output.concat([
			'',
			'    Server   ' + (stats.data === undefined ? '' : chalk.cyan(stats.data.server.host)),
			'  Location   ' + (stats.data === undefined ? '' : chalk.cyan(stats.data.server.location + chalk.dim(' (' + stats.data.server.country + ')'))),
			'  Distance   ' + (stats.data === undefined ? '' : chalk.cyan(roundTo(stats.data.server.distance, 1) + chalk.dim(' km')))
		]);
	}

	logUpdate(output.join('\n'));
}

function setState(s) {
	state = s;

	if (s && s.length > 0) {
		stats[s] = chalk.yellow('0' + chalk.dim(' Mbps'));
	}
}

function map(server) {
	server.host = url.parse(server.url).host;
	server.location = server.name;
	server.distance = server.dist;

	return server;
}

var st = speedtest({maxTime: 20000});

if (!cli.flags.json) {
	setInterval(render, 50);
}

st.once('testserver', function (server) {
	if (cli.flags.verbose) {
		stats.data = {
			server: map(server)
		};
	}

	setState('download');
	var ping = Math.round(server.bestPing);
	stats.ping = (cli.flags.json) ? ping : chalk.cyan(ping + chalk.dim(' ms'));
});

st.on('downloadspeedprogress', function (speed) {
	if (state === 'download' && cli.flags.json !== true) {
		var download = roundTo(speed, speed > 10 ? 0 : 1);
		stats.download = chalk.yellow(download + chalk.dim(' Mbps'));
	}
});

st.on('uploadspeedprogress', function (speed) {
	if (state === 'upload' && cli.flags.json !== true) {
		var upload = roundTo(speed, speed > 10 ? 0 : 1);
		stats.upload = chalk.yellow(upload + chalk.dim(' Mbps'));
	}
});

st.once('downloadspeed', function (speed) {
	setState('upload');
	var download = roundTo(speed, speed > 10 && !cli.flags.json ? 0 : 1);
	stats.download = (cli.flags.json) ? download : chalk.cyan(download + chalk.dim(' Mbps'));
});

st.once('uploadspeed', function (speed) {
	setState('');
	var upload = roundTo(speed, speed > 10 && !cli.flags.json ? 0 : 1);
	stats.upload = (cli.flags.json) ? upload : chalk.cyan(upload + chalk.dim(' Mbps'));
});

st.on('data', function (data) {
	if (cli.flags.verbose) {
		stats.data = data;
	}

	render();
});

st.on('done', function () {
	process.exit();
});

st.on('error', function (err) {
	if (err.code === 'ENOTFOUND') {
		console.error(logSymbols.error, 'Please check your internet connection');
	} else {
		console.error(err);
	}

	process.exit(1);
});
