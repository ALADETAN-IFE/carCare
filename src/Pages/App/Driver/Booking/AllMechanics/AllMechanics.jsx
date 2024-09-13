import { useState } from "react"
import Footer from "../../../../../Components/Footer/Footer"
import LayoutHeader from "../../../../../Layout/LayoutHeader/LayoutHeader"
import "./allMechanics.css"
import MechanicPaggination from "./MechanicPaggination/MechanicPaggination"
import MechanicsCard from "./MechanicsCard/MechanicsCard"
import mechDatasJSON from "./mechanicsData.json"
import mechImg from "./mechImg.png"
import { useParams } from "react-router-dom"

const AllMechanics = () => {
    const inputImg = () => {
        return (
            mechDatasJSON?.map(e => {
                return e.image = mechImg
            })
        )
        //    console.log()
    }
    inputImg()
    const [mechDatas, setmechDatas] = useState(mechDatasJSON)
    const { pageNum } = useParams();
    // console.log(pageNum)
    // const [currentPage, setCurrentPage] = useState(1);
    // Initialize the current page from URL parameter or default to 1
    // const [currentPage, setCurrentPage] = useState(Number(pageNum) || 1);
    // console.log(pageNum?.split("")[pageNum.length-1], "hello")
    const [currentPage, setCurrentPage] = useState(Number(pageNum?.split("")[pageNum.length-1]));
    const itemsPerPage = 9;
    // useEffect(() => {
    //     // Assuming you have a logic to fetch paginated data here
    //     const fetchMechanics = async () => {
    //         // Implement fetch logic here
    //     };
    //     fetchMechanics();
    // }, [currentPage]);

    const indexOfLastMechanic = currentPage * itemsPerPage;
    const indexOfFirstMechanic = indexOfLastMechanic - itemsPerPage;
    const currentMechanics = mechDatas.slice(indexOfFirstMechanic, indexOfLastMechanic);
    // console.log(mechDatasJSON)

    return (
        <div className="AllMechanicsMainBody">
            <LayoutHeader />
            <div className="AllMechanicsBody">
                <div className="AllMechanicsBodyWrapper">
                    <div className="AllMechanicsBodyWrapperTop"> 
                    Showing {indexOfFirstMechanic + 1}-{Math.min(indexOfLastMechanic, mechDatas.length)} of {mechDatas.length} results
                    </div>
                    <div className="AllMechanicsBodyWrapperMiddle">
                        {
                            currentMechanics?.length < 1 ?
                                <p>No mechanics available</p>
                                :
                                <>
                                    {
                                        currentMechanics?.map((e, i) => (

                                            <MechanicsCard key={i} mech={e} />
                                        ))
                                    }
                                </>
                        }
                        {/* <MechanicsCard />
                        <MechanicsCard />
                        <MechanicsCard />
                        <MechanicsCard /> */}
                    </div>
                    <div className="AllMechanicsBodyWrapperBottom">
                        <MechanicPaggination
                            currentPage={currentPage} setCurrentPage={setCurrentPage}
                            totalItems={mechDatas.length} itemsPerPage={itemsPerPage}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AllMechanics