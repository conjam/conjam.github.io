---
layout : post
title: Numerical methods in Floquet Theory
tags :  periodic orbit oscillator science floquet limit cycle BIRDS
categories : news
authors: Shai Revzen
date: 2014-10-31
images:
  - images/old/2014_SIAM_ADS.png
excerpt: 
  This paper discusses numerical methods of computing a particular normal form, called a Floquet normal form,
 of solutions for linear, time-periodic differential equations. 
---


###Rigorous numerics in Floquet theory: computing stable and unstable bundles of periodic orbits


<img src="/images/old/2014_SIAM_ADS.png" style="width:300px">

This paper discusses numerical methods of computing a particular normal form, called a Floquet normal form,
 of solutions for linear, time-periodic differential equations. This paper is interesting for the following reasons.
First, it gives a nice introduction to the key theorems of Floquet theory, with proofs and/or references. Second, we
may model legged animals, robots, and other systems exhibiting "rhythmic" behavior by oscillators -- ordinary differential
equations exhibiting limit cycle behavior. It turns out that linear, time-periodic differential equations arise naturally
in the analysis of such systems (when linearizing the dynamics about the periodic orbit). If the Floquet normal form for such a 
system can be computed, this may allow insights into the mathematical models describing legged animals, robots, and other rhythmic 
systems, which leads to insight into these systems themselves.



[Link to Paper](http://dx.doi.org/10.1137/120873960)

####Abstract
In this paper, a rigorous method to compute Floquet normal forms of fundamental matrix solutions of nonautonomous 
linear differential equations with periodic coefficients is introduced. The Floquet normal form of a fundamental matrix solution 
$$ \Phi(t) $$ is a canonical decomposition of the form $$\Phi(t)=Q(t)e^{Rt}$$, where $$Q(t)$$ is a real periodic matrix and 
$$R$$ is a constant matrix. To rigorously compute the Floquet normal form, the idea is to use the regularity of $$Q(t)$$ and to 
simultaneously solve for $$R$$ and $$Q(t)$$ with the contraction mapping theorem in a Banach space of rapidly decaying coefficients. 
The explicit knowledge of $$R$$ and $$Q$$ can then be used to construct, in a rigorous computer-assisted way, stable and unstable 
bundles of periodic orbits of vector fields. The new proposed method does not require rigorous numerical integration of the ODE.


_Authors_ : R. Castelli and J. Lessard 

