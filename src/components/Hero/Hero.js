import './Hero.css';
// import '../Navbar/Navbar.css';
import { heroImage, card1, card2, card3, card4, review1, review2, review3 } from '../../assets/images';

const Hero = () => {
    return (
        <div className="hero container m-0">
            {/* <h1 className="title text-center  mb-4">
                Welcome to our Store
            </h1> */}

            {/* Dialog Box for Comapany Information */}
            <button className="btn-text theme-info d-flex justify-content-center" type="button" data-bs-toggle="drawer" data-bs-target="#drawerExample" aria-controls="drawerExample">
                Know more about us
            </button>
            <dialog className="drawer drawer-start" tabindex="-1" id="drawerExample" aria-labelledby="drawerExampleLabel">
                <div className="drawer-header">
                    <div className="navbar-left">
                        <a href="/" className="logo bg-inverse fg-contrast-inverse">LivSpace</a>
                    </div>
                    <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
                </div>
                <div className="drawer-body">
                    <div>
                        Livspace (pronounced as li-v-space), is a home interior and renovation company headquartered in Singapore. It provides interior design and renovation services in Singapore and India.[2][3] The company was founded in 2014 by Anuj Srivastava and Ramakant Sharma[4] and has raised funding of $450 million
                    </div>
                    <div className="mt-3">
                        <button className="btn-solid theme-secondary" type="button" data-bs-toggle="menu">
                            Menu
                        </button>
                        <div className="menu">
                            <a className="menu-item" href="/airspace">Action</a>
                            <a className="menu-item" href="/airspace">Another action</a>
                            <a className="menu-item" href="/airspace">Something else here</a>
                        </div>
                    </div>
                </div>
            </dialog>

            <div className="hero-image text-center">
                <img
                    src={heroImage}
                    className="rounded shadow"
                    alt="Store hero"
                />
            </div>

            <div className="center-section">
                <h1>Our Projects</h1>
            </div>
            {/* <h1 className="text-center mt-4 ml-8">Our Projects</h1> */}
            <div className="hero-card row row-cols-1 md:row-cols-2 g-4 mt-2 d-flex justify-content-center align-items-center">
                <div className="col">
                    <div className="card">
                        <img src={card1} className="card-img-top img-thumbnail" alt="..." />
                        {/* <div class="mb-3"> */}
                            {/* <label for="image" class="form-label">Upload Listing Image</label> */}
                            {/* <input name="newListing[image]" type="file" class="form-control"/> */}
                        {/* </div> */}
                        <div className="card-body">
                            <h4 className="card-title" style={{ color: "black" }}>Vintage Groove Meets Modern Mood</h4>
                            <p className="card-text">Modern Minimalistic 4 BHK Home Of Auro Smitha</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={card2} className="card-img-top img-thumbnail" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title" style={{ color: "black" }}>Creamy Calm Living</h4>
                            <p className="card-text">Megha Malani’s 2 BHK Home In Mumbai</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={card3} className="card-img-top img-thumbnail" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title" style={{ color: "black" }}>Earthy Elegance Entryway</h4>
                            <p className="card-text">This room has personality in spades.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={card4} className="card-img-top img-thumbnail" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title" style={{ color: "black" }}>Modern Mirror Moment</h4>
                            <p className="card-text">This room glows like candlelight. With creamy drapery, warm wood, and sculptural elements.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='center-section'>
                <h2>Customers Review</h2>
            </div>
            {/* <h3 className='mt-9 ml-3 text-center'>Our Customer Reviews</h3> */}
            <div className="hero-card contains-inline mt-5 mb-5 d-flex justify-content-between align-items-center flex-column">
                <div className="card-group">
                    <div className="card">
                        <img src={review1} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text"><i>""We wanted our new home to look
                                contemporary and modern since we picked
                                up tastes from across travelling the world. "
                                Priyanka and Tarun""</i></p>
                        </div>
                        <div className="card-footer">
                            <small className="fg-2">Last updated 5 mins ago</small>
                        </div>
                    </div>
                    <div className="card">
                        <img src={review2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text"><i>""The designer's dedication made the place
                                look beautiful and it gets better everyday I
                                enter my home""</i>
                                Kanchan and Sumit</p>
                        </div>
                        <div className="card-footer">
                            <small className="fg-2">Last updated 30 mins ago</small>
                        </div>
                    </div>
                    <div className="card">
                        <img src={review3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text"><i>""Livspace was the best collaboration for the
                                modern and contemporary home we
                                wanted. "
                                Nidhi and Vikas""</i></p>
                        </div>
                        <div className="card-footer">
                            <small className="fg-2">Last updated 1 hour ago</small>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <h1 className="form-label">Select a plan</h1>

                <div className="vstack gap-1">
                    <div className="form-field form-field-card">
                        <input type="radio" id="fieldRadioGroup1" class="radio" name="fieldRadioGrouped" checked />
                        <div className="form-field-content">
                            <label for="fieldRadioGroup1">Basic Estimate</label>
                            <small className="form-text">$1000 — Planner 5D</small>
                        </div>
                    </div>
                    <div className="form-field form-field-card">
                        <input type="radio" id="fieldRadioGroup2" className="radio" name="fieldRadioGrouped" checked />
                        <div className="form-field-content">
                            <label for="fieldRadioGroup2">Pro</label>
                            <small className="form-text">$100000 — Canva Floor Plan Creator</small>
                        </div>
                    </div>
                    <button className='theme-primary btn-solid btn-styled pay'>Connect us</button>
                    <div className="card-footer">
                        <small className="fg-2 text-center">(Terms & Conditions Apply)</small>
                    </div>
                </div>
            </div>

            <div className="center-section">
                <h2>HouseGyan All Services</h2>
            </div>
            {/* <h2 className="text-center font-bold text-dark text-xl mb-4 ml-4" style={{ alignContent: "center" }}>HouseGyan All Services</h2> */}
            {/* <div id="carouselExampleContent " className="carousel slide"> */}
            <div id="carouselExampleContent" className="carousel slide">
                <div className="carousel-inner rounded-5">
                    <div className="carousel-item active">
                        <div className="d-flex flex-column justify-content-center text-start bg-warning bg-gradient fg-contrast-warning p-9 rounded-5" style={{ minHeight: "320px" }}>
                            <h3>Vastu Shastra</h3>
                            <p className="text-dark mb-3 para1">Boost positivity at home with main door Vastu tips. Learn best direction, colors, and entrance design ideas for good luck, prosperity, and a welcoming home.</p>
                            <div><a className="btn-solid theme-primary" href="/">Get started</a></div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex flex-column justify-content-center text-center bg-accent bg-gradient fg-contrast-accent rounded-5" style={{ minHeight: "320px" }}>
                            <h3>Shubh Muhurta</h3>
                            <p className="text-dark mb-3 para2">Check aaj ka shubh muhurat, upcoming Griha Pravesh dates, best nakshatras and monthly muhurat calendar for your housewarming ceremony.</p>
                            <div><a className="btn-solid theme-success" href="/">Learn more</a></div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex flex-column justify-content-center text-end bg-subtle-warning p-9 bg-3 rounded-5" style={{ minHeight: "320px" }}>
                            <h3>Custom Elevation Design</h3>
                            <p className="text-dark mb-3 para3">When envisioning your dream home, the front house elevation design plays a pivotal role in defining its aesthetics and functionality.</p>
                            <div><a className="btn-solid theme-inverse" href="/">Browse examples</a></div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center gap-2">
                    <button className="btn-icon btn-sm bsss" type="button" data-bs-target="#carouselExampleContent" data-bs-slide="prev" >
                        <span className="carousel-icon-prev" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="btn-icon btn-sm bsss" type="button" data-bs-target="#carouselExampleContent" data-bs-slide="next">
                        <span className="carousel-icon-next" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Hero;