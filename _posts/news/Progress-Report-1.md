---
layout : post
title: "Progress Report 1" 
tags :  progress report 
date: 2016-11-22
categories : 
   - news
author: James Connolly
images:
   - images/dtw.png
   - images/PR1.jpg
   - images/timedomain.png 
   - images/mfcc.png   
excerpt: "Click here to learn more about our progress! Wow! Much Progress! Very Advances! "
---


Currently, we are still understanding and developing the blocks within our system. Two hurdles beginning our project were MFCC generation and dynamic time warping. Fortunatley, MFCC generation is a well defined problem, and there is well documented ,<a href="https://www.mathworks.com/matlabcentral/fileexchange/32849-htk-mfcc-matlab/content/mfcc/mfcc.m">open source code </a> that implements this block in our system. Our worries with MFCCs was that it would not be an effective basis when describing accented phonemes. We found that a naive k-Nearest Neighbors was very effective at classifying accented phonemes, as detailed in our final proposal, proving that MFCCs was a viable basis in which our signal could be represented. 


In our project, speakers may have a different duration to speak the same word. This incongruence would result in certain phonemes to be spoken faster or slower than the other, distorting MFCCs. Therefore, we had to implement dynamic time warping (DTW) which addresses this issue by providing a mapping from one signal to another. The struggle with this algorithm was that traditionally it was implemented with the consideration that the input is a 1xN vector. Our inputs, MFCCs, are 13xN matrices, so one difficulty has been adapting the DTW algorithm to allow for this input structure.


<img src="/images/images/dtw.png" style="width:300px">
<img src="/images/timedomain.png" style="width:300px">
<img src="/images/mfcc.png" style="width:300px">


_Authors_ : Vikram Sacheva, James Connolly, Paul Reggentin

