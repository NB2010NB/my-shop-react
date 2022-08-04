const PicSmile = (props) => {
    return <img src={props.PicSmile} />;
}
export default PicSmile

// function Picture() {
//     let SmileArray = ["SmileImage.jpg", "Smile1.jpg", "Smile2.jpg", "Smile3.jpg", "Smile4.jpg"]
//     return (
//         <div>

//             {
//                 SmileArray.map(smileItem =>
//                     (<Picture PicSmile={`Image/${smileItem}`} />)
//                 )
//             }
//         </div>

//     < img src = "Image/SmileImage.jpg" alt = "" />
//     )
// }
// export default Picture