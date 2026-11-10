---
title: Haptic Feedback Sleeve for VR
summary: A wearable sleeve that turns in-game VR events into localized vibration on the arm, driven by a custom 16-channel motor driver.
date: 2026-08-01
end_date:
status: In progress
featured: true
context: Personal project
areas: [Hardware, Embedded, Software]
skills: [KiCad, LTspice, Arduino, Python, C#, Unity, I²C, PWM]
# thumbnail: /assets/images/projects/haptic-sleeve/thumbnail.jpg
# cover: /assets/images/projects/haptic-sleeve/cover.jpg
links:
  - label: GitHub
    url:
metrics:
  - value: "16"
    label: independently driven motors
  - value: 12-bit
    label: PWM resolution
  - value: 200–300 Hz
    label: PWM frequency range
# gallery:
#   - src: /assets/images/projects/haptic-sleeve/schematic.png
#     caption: Motor driver schematic
---

## Overview

Designing a wearable haptic sleeve that turns in-game VR events into localized vibration on the arm.

## Hardware Design

- Designed a 16-channel motor driver with low-side N-MOSFET switches and flyback diodes, driven by a PCA9685 12-bit PWM controller over I²C.
- Each motor's intensity is controlled independently; the PWM frequency is being tuned between 200 and 300 Hz.
- Verified the circuit in LTspice with a custom SPICE model of the vibration motor before breadboard testing, then did the schematic and PCB layout in KiCad.

## Software Stack

- **Firmware:** Arduino motor-driver firmware.
- **Waveforms:** Python generator for sensation waveforms.
- **Game integration:** C# Unity library that maps in-game collisions to PWM commands.

## Status & Next Steps

<!-- What's done, what's next, what you learned. -->
