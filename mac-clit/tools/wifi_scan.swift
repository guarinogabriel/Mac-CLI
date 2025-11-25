#!/usr/bin/env swift

import Foundation
import CoreWLAN

func scanWiFi() {
	guard let interface = CWWiFiClient.shared().interface() else {
		print("No Wi-Fi interface found")
		exit(1)
	}
	
	do {
		let networks = try interface.scanForNetworks(withSSID: nil)
		if networks.isEmpty {
			print("No networks found")
		} else {
			print("SSID\tRSSI (dBm)\tChannel")
			for network in networks.sorted(by: { $0.ssid ?? "" < $1.ssid ?? "" }) {
				let ssid = network.ssid ?? "Unknown"
				let rssi = network.rssiValue
				let channel = network.wlanChannel?.channelNumber ?? 0
				print("\(ssid)\t\(rssi)\t\(channel)")
			}
		}
	} catch {
		print("Failed to scan networks: \(error)")
		exit(1)
	}
}

scanWiFi()