import banner from '../../assets/banner/orchi-white-bg.png'

const Banner = () => {
    return (
        <div className="hero min-h-[calc(100vh-100px)] bg-white mb-12">
            <div className="hero-content flex-col lg:flex-row">
                <img src={banner} className="max-w-sm rounded-lg flex-1" />
                <div className='flex-1'>
                    <h1 className="text-5xl font-bold">Zakia Tanzim Orchi</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;