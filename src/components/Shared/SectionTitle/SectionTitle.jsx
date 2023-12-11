
const SectionTitle = ({heading}) => {
    return (
        <div className="mb-6">
            <h2 className="text-4xl text-orange-500 text-center font-bold z-50">--- {heading} ---</h2>
            {/* <h2>{subheading}</h2> */}
        </div>
    );
};

export default SectionTitle;