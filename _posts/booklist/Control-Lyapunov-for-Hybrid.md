---
layout : post
title : Control Lyapunov for Hybrid System
tags : lyapunov control function hybrid discrete time
categories : booklist 
date: 2014-10-17
author: Shai Revzen
excerpt: 
  A relatively interesting paper presented in IEEE Transactions on Automatic Control, it presents an argument for extending Control Lyapunov Functinos, a standard result for smooth equations, to discrete-time hybrid systems. As gaining insight from the 'raw' dynamics of a hybrid system can be challenging at best, adding a tool to reduce the complexity of analysis, much like Lyapunov theory for ordinary systems, is appealing. 
---



###Developing Control Lyapunov Functions for Discrete Time Hybrid Systems.

A relatively interesting paper presented in IEEE Transactions on Automatic Control, it presents an argument for extending Control Lyapunov Functinos, a standard result for smooth equations, to discrete-time hybrid systems. As gaining insight from the 'raw' dynamics of a hybrid system can be challenging at best, adding a tool to reduce the complexity of analysis, much like Lyapunov theory for ordinary systems, is appealing. 

[Link to Paper](http://dx.doi.org/10.1109/TAC.2014.2351693)

####Abstract

This paper proposes a dynamic controller structure and a systematic design procedure for stabilizing discrete-time hybrid systems. The proposed approach is based on the concept of control Lyapunov functions (CLFs), which, when available, can be used to design a stabilizing state-feedback control law. In general, the construction of a CLF for hybrid dynamical systems involving both continuous and discrete states is extremely complicated, especially in the presence of non-trivial discrete dynamics. Therefore, we introduce the novel concept of a hybrid control Lyapunov function, which allows the compositional design of a discrete and a continuous part of the CLF, and we formally prove that the existence of a hybrid CLF guarantees the existence of a classical CLF. A constructive procedure is provided to synthesize a hybrid CLF, by expanding the dynamics of the hybrid system with a specific controller dynamics. We show that this synthesis procedure leads to a dynamic controller that can be implemented by a receding horizon control strategy, and that the associated optimization problem is numerically tractable for a fairly general class of hybrid systems, useful in real world applications. Compared to classical hybrid receding horizon control algorithms, the proposed approach typically requires a shorter prediction horizon to guarantee asymptotic stability of the closed-loop system, which yields a reduction of the computational burden, as illustrated through two examples.

_Authors_ : Di Cairano, S. ; Mitsubishi Electr. Res. Labs., Cambridge, MA, USA ; Heemels, W.P.M.H. ; Lazar, M. ; Bemporad, A.

