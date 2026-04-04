function Wave({color}) {
    return (
        <svg
            className="parallax"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
        >
            <defs>
                <path
                    id="wave-path"
                    d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
            </defs>
            <g>
                <use className="wave" xlinkHref="#wave-path" x="48" y="0" fill={color} />
                <use className="wave" xlinkHref="#wave-path" x="48" y="-2" fill={color} fillOpacity="0.6" />
                <use className="wave" xlinkHref="#wave-path" x="48" y="-5" fill={color} fillOpacity="0.4" />
                <use className="wave" xlinkHref="#wave-path" x="48" y="-9" fill={color} fillOpacity="0.2"/>
            </g>
        </svg>
    );
}
export default Wave;