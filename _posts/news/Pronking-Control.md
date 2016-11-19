---
layout : post
title : Pronking Control
tags : Pronking control
categories : news
date: 2015-01-05
author: Shai Revzen
excerpt: 
  Pronking is a behavior that's be explored in biology, and simulated in robots. In biology, the motivation for the stride is as yet unknown, and better dynamical knowledge of the gait in robots could aide that line of inquiry.  This paper provides discussion on stable generation of a pronking gait in a 'templates and anchors' framework, which is a popular idea in biomechanics.
---

Pronking is a behavior that's be explored in biology, and simulated in robots. In biology, the motivation for the stride is as yet unknown, and better dynamical knowledge of the gait in robots could aide that line of inquiry.  This paper provides discussion on stable generation of a pronking gait in a 'templates and anchors' framework, which is a popular idea in biomechanics.



[Link to Paper](http://dx.doi.org/10.1007/s10514-010-9216-x)
_Authors_ : Authors : M. Mert Ankarali, Uluc, Saranli 
__Journal__ : Auton. Robot
###Abstract 

Autonomous use of legged robots in unstructured, outdoor settings requires dynamically dexterous behaviors to achieve sufficient speed and agility without overly complex and fragile mechanics and actuation. Among such behaviors is the relatively under-studied pronking (aka. stotting), a dynamic gait in which all legs are used in synchrony, usually resulting in relatively slow speeds but long flight phases and large jumping heights. Instantiations of this gait for robotic systems have been mostly limited to open-loop strategies, suffering from severe pitch instability for underactuated designs due to the lack of active feedback. However, both the kinematic simplicity of this gait and its dynamic nature suggest that the Spring-Loaded Inverted Pendulum model (SLIP) would be a good basis for the implementation of a more robust feedback controller for pronking. In this paper, we describe how template-based control, a controller structure based on the embedding of a simple dynamical “template” within a more complex “anchor” system, can be used to achieve very stable pronking for a planar, underactuated hexapod robot. In this context, high-level control of the gait is regulated through speed and height commands to the SLIP template, while the embedding controller ensures the stability of the remaining degrees of freedom. We use simulation studies to show that unlike existing open-loop alternatives, the resulting control structure provides explicit gait control authority and significant robustness against sensor and actuator noise.
