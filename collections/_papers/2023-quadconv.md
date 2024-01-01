---
title: "QuadConv: Quadrature-Based Convolutions with Applications to Non-Uniform PDE Data Compression"
authors: Kevin Doherty, Cooper Simpson, et al.
year: 2023
type: Journal Publication
pdf: https://www.sciencedirect.com/science/article/abs/pii/S0021999123007313
arxiv: https://arxiv.org/abs/2211.05151
code: https://github.com/kvndhrty/QuadConv
---
## Abstract
We present a new convolution layer for deep learning architectures which we call QuadConv -- an approximation to continuous convolution via quadrature. Our operator is developed explicitly for use on non-uniform, mesh-based data, and accomplishes this by learning a continuous kernel that can be sampled at arbitrary locations. Moreover, the construction of our operator admits an efficient implementation which we detail and construct. As an experimental validation of our operator, we consider the task of compressing partial differential equation (PDE) simulation data from fixed meshes. We show that QuadConv can match the performance of standard discrete convolutions on uniform grid data by comparing a QuadConv autoencoder (QCAE) to a standard convolutional autoencoder (CAE). Further, we show that the QCAE can maintain this accuracy even on non-uniform data. In both cases, QuadConv also outperforms alternative unstructured convolution methods such as graph convolution.

## Notes

## Related