import './cursortext.scss';

const handleMouseMove = (e) => {
    const width = window.innerWidth;

    const span = document.querySelectorAll('span');
    const spansSlow = document.querySelectorAll('.spanSlow');
    const spansFast = document.querySelectorAll('.spanFast');

    const normalizedPosition = e.pageX / (width / 2) - 1;
    const speedSlow = 100 * normalizedPosition;
    const speedFast = 200 * normalizedPosition;
    spansSlow.forEach((span) => {
        span.style.transform = `translate(${speedSlow}px)`;
    });
    spansFast.forEach((span) => {
        span.style.transform = `translate(${speedFast}px)`
    })
    // console.log(speedFast);
    
};

window.addEventListener('mousemove', handleMouseMove);

const CursorText = () => {
    return (
        <>
            <div className="detel">
                <div className="wrap">
                    <div className="line">
                        <div className="left">
                            <div className="content">
                                <span className="spanSlow">Hello</span>
                            </div>
                        </div>
                        <div className="right">
                            <div className="content">
                                <span className="spanSlow">Hello</span>
                            </div>
                        </div>
                    </div>
                    <div className="line">
                        <div className="left">
                            <div className="content">
                                <span className="spanSlow">Bonjuor</span>
                            </div>
                        </div>
                        <div className="right">
                            <div className="content">
                                <span className="spanSlow">Bonjuor</span>
                            </div>
                        </div>
                    </div>
                    <div className="line">
                        <div className="left">
                            <div className="content">
                                <span className="spanFast">لسلام عليكم</span>
                            </div>
                        </div>
                        <div className="right">
                            <div className="content">
                                <span className="spanFast">لسلام عليكم</span>
                            </div>
                        </div>
                    </div>
                    <div className="line">
                        <div className="left">
                            <div className="content">
                                <span className="spanSlow">नमस्ते</span>
                            </div>
                        </div>
                        <div className="right">
                            <div className="content">
                                <span className="spanSlow">नमस्ते</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--<div className="detel">
            <h1>I'm Fatuous <span id="anim">Nerd</span></h1>
            <p>This is my official portfolio website.</p>
            <!-<a href="#">DOWNLOAD CV</a>->
        </div>--> */}


            </div>
        </>
    )
}

export default CursorText