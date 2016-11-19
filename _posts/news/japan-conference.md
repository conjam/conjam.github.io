---
layout : post
title : "DeadBeat Control"
date: 2014-08-15 
tags : feedfoward deadbeat japan conference manifold goal hybrid system SLIP BIRDS
categories : news
images:
  - images/old/SLIP.png
  - images/old/hopping_slip.png
  - images/old/scheme.png
author: unknown
excerpt: 
  In August of 2014, we had the opportunity to present an interesting result at the International Conference on Advanced Mechatronic Systems, held in Kumamoto, Japan. 
---
In August of 2014, we had the opportunity to present an interesting result at the International Conference on Advanced Mechatronic Systems, held in Kumamoto, Japan. The result being presented was a generalization of an idea explored previously in the literature - that a Spring Loaded Inverted Pendulum (SLIP), a popular model for legged locomotion could reject uncertainity in ground height using a feedfoward controller. While others had solved this in the specific case of the conservative SLIP, the result presented generalizes to a much broader range of hybrid dynamical systems, of which the SLIP is a member of. The picture below illustrates the idea - there are two regions, A, and B. By restriction the flow in A to a specified submanifold of the state space, uncertanity in the region O can be totally rejected. For SLIP, A would correspond to the descent-aerial phase, while B would be an aggregate of stance-ascent dynamics.

<br>
<center><img src="/images/old/scheme.png" style="width:500px"></center>
<center> A pictoral representation of the controls scheme - creating a manifold, and rendering it attractive. </center>
<br>

The result essentially presents a reciepe for the construction of a controller to achieve stipulated performance tasks that are subject to uncertainity in transition, reducing a potentially very complex problem to a much simplier one. Shown below are a respresentation of SLIP for clarity, and a simulation output for this method being applied to a non-conservative SLIP, allowing it to maintiain a periodic solution that fixes a _relative_ height above the ground. 

<div align="center"> 
<img src="/images/old/SLIP.png" style="width:300px">
<img src="/images/old/hopping_slip.png" style="width:300px;">
</div> 
