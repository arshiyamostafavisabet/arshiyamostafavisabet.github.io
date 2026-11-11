---
title: Climate Tree – LoRaWAN Field Monitoring
summary: A LoRaWAN network of 5 sensor nodes on a working farm, collecting soil and climate data across ~8,900 m², later moved from dev boards to a custom SAMD21 + LoRa PCB.
date: 2025-05-01
end_date: 2026-09-01
featured: true
context: STEMMINDS Corp. – Technology & Innovation / R&D
areas: [Hardware, Embedded]
skills: [LoRaWAN, RP2040, ESP32, C++, TTN, KiCad, SAMD21, Voltera V1]
thumbnail: /assets/images/projects/climate-tree/thumbnail.jpg
cover: /assets/images/projects/climate-tree/cover.jpg
links:
  - label: GitHub
    url:
metrics:
  - value: "5"
    label: field sensor nodes
  - value: "~8,900 m²"
    label: area covered
  - value: "58%"
    label: unit cost cut with custom PCB
  - value: "2 → 6"
    label: analog inputs
gallery:
  - src: /assets/images/projects/climate-tree/demo-station.jpg
    caption: Climate Tree demo station used on student tours
  - src: /assets/images/projects/climate-tree/grow-kit-demo.jpg
    caption: Nodes monitoring indoor grow kits
  - src: /assets/images/projects/climate-tree/greenhouse-node.jpg
    caption: Node deployed in the greenhouse
  - src: /assets/images/projects/climate-tree/field-node.jpg
    caption: Node deployed in a field bed on the farm
  - src: /assets/images/projects/climate-tree/pcb-3d.jpg
    caption: 3D render of the custom PCB in KiCad
  - src: /assets/images/projects/climate-tree/voltera-print.jpg
    caption: Printing a prototype board in-house on the Voltera V1
---

## Overview

The Climate Tree is a LoRaWAN sensor node that measures soil and climate conditions (temperature, humidity, soil moisture, pH) and reports them to The Things Network (TTN). I designed and deployed a network of 5 nodes across ~8,900 m² of a working farm; they doubled as live demos on student tours.

## v1 – Dev-Board Nodes

- Wrote C++ firmware for RP2040 sensor nodes to read the sensors, pack compact LoRaWAN payloads and handle uplinks.
- Refactored the firmware into a modular, object-oriented driver design (one class per sensor), so new sensors can be added without touching the rest of the code.
- Set up an ESP32 LoRaWAN-to-WiFi gateway and the TTN application (device registration, keys, payload decoding) to connect the field nodes to the cloud dashboard.

## v2 – Custom PCB

The dev-board nodes were expensive and had too few analog inputs, so I led the move to a custom PCB over 3 design revisions.

![KiCad PCB layout of the custom sensor board](/assets/images/projects/climate-tree/pcb-layout.jpg)

- Designed the schematic around a SAMD21G17A (ARM Cortex-M0+) with USB-C and TVS ESD protection, power-rail filtering, buffered analog inputs (5 V sensors protected at the 3.3 V ADC), an SX1262 LoRa transceiver over SPI, and I²C sensor headers.
- Built and brought up prototypes in-house on a Voltera V1 PCB printer, adapting KiCad design rules (DRC) to the printer's manufacturing limits.
- Cut unit cost 58% ($60 → $25) and tripled the analog inputs (2 → 6).
