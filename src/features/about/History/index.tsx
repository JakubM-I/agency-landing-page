import SectionTitle from "../../../components/SectionTitle";

const History: React.FC = () => {
    return (
        <div className="py-16 sx:py-[87px]">
            <SectionTitle title="Our Creative Journey" styling="mb-8" />
            <div className="w-[min(1000px,100%)] px-6 mx-auto">
                <p className="text-preset-10 text-center text-grey-550 text-pretty mb-2">Founded in 2018, Sunnyside emerged from a simple belief: that exceptional design has the power to transform businesses and connect people in meaningful ways.</p>
                <p className="text-preset-10 text-center text-grey-550 text-pretty mb-2">What started as a small team of passionate designers has grown into a full-service creative agency, but our core mission remains unchanged - to help brands shine brighter and stand out in an increasingly crowded marketplace.</p>
                <p className="text-preset-10 text-center text-grey-550 text-pretty mb-2">We combine strategic thinking with creative excellence, ensuring every project not only looks amazing but delivers real business results for our clients.</p>
            </div>
        </div>
    )
}

export default History;