---
layout : post
title : A direct method for Trajectory Optimization of Rigid Bodies Through Contact 
tags : control hybrid optimization rigid 
content_tags: hybrid rigid optimization rigid
jour: IJRR
categories : booklist 
author: George Council
date: 2015-02-05
excerpt: 
  A paper about trajectory optimization in hybrid systems. Interesting, as it relaxes would be naively been consider a core constraint of hybrid systems - the order at which vector fields are switched through. While specific for a rigid body, it provides a scablable numerical tool to optimizie over the 'aggregate' dynamics, rather than find optimal solutions in each vector field with a known ordering
---


A paper about trajectory optimization in hybrid systems. Interesting, as it relaxes would be naively been consider a core constraint of hybrid systems - the order at which vector fields are switched through. While specific for a rigid body, it provides a scablable numerical tool to optimizie over the 'aggregate' dynamics, rather than find optimal solutions in each vector field with a known ordering.


[Link to Paper](http://groups.csail.mit.edu/robotics-center/public_papers/Posa13.pdf)
<br>
_Authors_ : Michael Posa, Cecilia Cantu, and Russ Tedrake
<br>
__Journal__ : International Journal of Robotics Research.
<br>
<h3>Abstract</h3>
 

Direct methods for trajectory optimization are widely used for planning locally optimal trajectories of robotic systems. Most state-of-the-art techniques treat the discontinuous dynamics of contact as discrete modes and restrict the search for a complete path to a specified sequence through these modes. Here we present a novel method for trajectory planning through contact that eliminates the requirement for an a priori mode ordering. Motivated by the formulation of multi-contact dynamics as a Linear Complementarity Problem (LCP) for forward simulation, the proposed algorithm leverages Sequential Quadratic Programming (SQP) to naturally resolve contact constraint forces while simultaneously optimizing a trajectory and satisfying nonlinear complementarity constraints. The method scales well to high dimensional systems with large numbers of possible modes.We demonstrate the approach using three increasingly complex systems: rotating a pinned object with a finger, planar walking with the Spring Flamingo robot, and high speed bipedal running on the FastRunner platform.
