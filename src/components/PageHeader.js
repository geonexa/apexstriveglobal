import React from 'react'
import PageTitelBG from "../../public/images/page-titles/page-title.jpg"

const PageHeader = ({ title, description }) => {
    return (

        <section
            style={{
                background: `rgba(0, 0, 0, 0.3) url(${PageTitelBG.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment:'fixed',
                backgroundBlendMode:"overlay",
                backgroundRepeat: 'no-repeat',
            }}
            className=" page-title page-title-layout13 text-center bg-overlay bg-overlay-gradient bg-parallax">
            {/* <div className="bg-img"><img src="assets/images/page-titles/11.jpg" alt="background"/></div> */}
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-3">
                        <h1 className="pagetitle__heading">{title}</h1>
                        <p className="pagetitle__desc">{description}
                        </p>
                        <nav>
                            <ol className="breadcrumb justify-content-center mb-0">
                                {/* <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item"><a href="about-us.html">Contact US</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Contact</li> */}
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default PageHeader