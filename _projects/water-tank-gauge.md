---
title: Bluetooth Water Tank Gauge
summary: A low-power ultrasonic water-level gauge on an ATmega32U4 that reports the tank's fill percentage to an Android app over BLE, accurate to ±1% in the field.
date: 2026-05-01
end_date: 2026-09-01
featured: false
context: STEMMINDS Corp. – Research & Development
areas: [Hardware, Embedded, Software]
skills: [ATmega32U4, C++, BLE (HM-10), Ultrasonic Sensing, EEPROM, Android]
thumbnail: /assets/images/projects/water-tank-gauge/thumbnail.jpg
cover: /assets/images/projects/water-tank-gauge/cover.jpg
links:
  - label: GitHub
    url:
metrics:
  - value: "±1%"
    label: field accuracy
  - value: "~75%"
    label: less current draw (61 → 15 mA)
gallery:
  - src: /assets/images/projects/water-tank-gauge/board-top.jpg
    caption: Assembled board with the ATmega32U4, HM-10 BLE module, ultrasonic sensor and status LEDs
  - src: /assets/images/projects/water-tank-gauge/board-wiring.jpg
    caption: Point-to-point wiring on the back of the perfboard
  - src: /assets/images/projects/water-tank-gauge/calibration.jpg
    caption: Calibrating distance readings against a metre stick
---

## Overview

Designed, built and deployed a Bluetooth gauge that measures the water level in a tank with an ultrasonic sensor and shows it on a phone. The firmware turns distance readings into a fill percentage, accurate to ±1% in the field.

## Hardware

- ATmega32U4 microcontroller with an ultrasonic distance sensor mounted above the water.
- HM-10 BLE module for the phone link, plus status LEDs for a quick visual check.
- Hand-built on perfboard for the first deployed unit.

## Firmware

- Interrupt-driven C++ firmware with a wake-on-connect sleep mode, cutting current draw ~75% (61 mA → 15 mA).
- The tank-height setting is stored in EEPROM so it survives power loss.

## Android App

- Connects over BLE, shows the live level and lets the user change the tank height remotely.
