---
title: "Regularized Saddle-Free Newton: Saddle Avoidance and Efficient Implementation"
authors: Cooper Simpson
year: 2022
type: Master's Thesis
pdf: ../../assets/files/masters-thesis.pdf
citation: nil
---
## Abstract
We present a new second-order method for unconstrained non-convex optimization, which we dub Regularized Saddle-Free Newton (R-SFN). This work builds upon a number of recent ideas related to improving the practical performance of the classic Newton’s method. In particular, we develop a nonlinear transformation to the Hessian which ensures it is positive definite at each iteration by approximating the matrix absolute value and regularizing with a scaled gradient norm. While our method applies to C2 objectives with Lipschitz Hessian, our analysis will require the existence of a third continuous derivative. Given this, we show that with an appropriately random initialization our method avoids saddle points almostsurely. Furthermore, the form of our nonlinear transformation facilitates an efficient matrix-free approach to computing the update via Krylov based quadrature, making our method scalable to high dimensional problems.

## Notes

## Related