<div class="wrapper">
    <div class="progress" role="progressbar">
      <svg class="svg" viewBox='22 22 44 44'>
        <circle class="circle" cx=44 cy=44 r=21 fill="none" stroke-width=2 />
      </svg>
    </div>
</div>

<style>
.wrapper {
    margin: 2rem;
    text-align: center;
}
.progress {
    display: inline-block;
    line-height: 1;
    width: 40px;
    height: 40px;
    animation: rotate 1.4s linear infinite;
    animation-name: rotate;
    color: var(--primary);
}
circle {
    stroke: currentColor;
    animation: dash 1.4s ease-in-out infinite;
    animation-name: dash;
    stroke-dasharray: 80px, 200px;
    stroke-dashoffset: 0px;
}
@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes dash {
    0% {
        stroke-dasharray: 1px, 200px;
        stroke-dashoffset: 0px;
    }
    50% {
        stroke-dasharray: 100px, 200px;
        stroke-dashoffset: -15px;
    }
    100% {
        stroke-dasharray: 100px, 200px;
        stroke-dashoffset: -125px;
    }
}
</style>
