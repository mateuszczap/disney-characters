export const Star = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 557 531" fill="none" style={{cursor:'pointer'}}>
            <defs>
    <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="red" />
      <stop offset="100%" stopColor="blue" />
    </linearGradient>
  </defs>
<path d="M283.255 10.0517L341.383 188.949C343.659 195.954 350.186 200.696 357.551 200.696H545.655C550.498 200.696 552.512 206.894 548.594 209.741L396.414 320.306C390.456 324.635 387.963 332.308 390.239 339.313L448.366 518.21C449.863 522.817 444.59 526.648 440.672 523.801L288.492 413.236C282.534 408.907 274.466 408.907 268.508 413.236L116.328 523.801C112.41 526.648 107.137 522.817 108.634 518.21L166.761 339.313C169.037 332.308 166.544 324.635 160.586 320.306L8.4062 209.741C4.48762 206.894 6.50151 200.696 11.3451 200.696H199.449C206.814 200.696 213.341 195.954 215.617 188.949L273.745 10.0517C275.241 5.44511 281.759 5.4451 283.255 10.0517Z" stroke="black" fill={props.isFilled ? "url(#myGradient)" : "" }strokeWidth="12"/>
</svg>
    )
}