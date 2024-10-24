import React from 'react'
import './UserCommunity.scss'
import profilePic from '../../../assets/profile_pic.webp'

function UserCommunity() {
    return (
        <div className='userCommunityContainer'>
            <div className='tweetContainer'>
                <div className='firstRow'>
                    <div>
                        <img src={profilePic} alt="" />
                        <p>Username</p>
                    </div>
                    <div>
                        <p>Visibility:</p>
                        <p>Public</p>
                    </div>
                </div>
                <div>
                    <textarea placeholder="Write something...">
                    </textarea>
                </div>
                <div>
                    <button>Post</button>
                </div>
            </div>
        </div>
    )
}

export default UserCommunity










































// // *{
// //     background-color:#0f0f0f;
// // }

// // body{
// //     background-color:#0f0f0f;
// // }
// @import '../../index.scss';

// .box{
//     padding:0vw;
//     width: 99%;
//     height: auto;
//     .SearchBar{
//         position: fixed;
//         height: 56px;
//         width: 100vw;
//         background-color:$background-color;
//         z-index: 100;
//     }
//         .displayer{
//             width: 100%;
//             background-color: aqua;
//         }
//         .left-side2{
//             position: fixed;
//             margin-top: 4%;
        
//             height: 100vh;
//             color: white;
//             background-color:$background-color;
//             z-index: 2;
//         }
//         .left-side {
//             position: fixed;
//             margin-top: 4%;
//             width: 15%;
//             height: 100vh;
//             color: white;
//             background-color:$background-color;
//             z-index: 2;
//         }
//         .right-side-WithNav {
//             // width: 100%;
//             // height: auto;
//             // display: flex;
//             // flex-direction: column;
//             // background-color:$background-color;
            
//         }
//         .right-side-WithoutNav{
//             margin-top:4%;
            
//             width: 100%;
//             height: auto;
//             display: flex;
//             flex-direction: column;
//             background-color:$background-color;
            
//         }
//     }
    
    
//     .watchVideo-container {
//         background-color: $background-color;
//         display: flex;
//         justify-content: space-between;
//         // margin: 20px;
//         margin-top: 5px;
//         height: auto;
    
//         width: 100%;
//         height: 100vh;
    
//         .watchVideo-left-side {
//             width: 68%;
//             height: auto;
//             display: flex;
        
//             flex-direction: column;
//             padding-right: 20px;
//             .subscribeSection{
//                 display: flex;
//                 justify-content: space-between;
//                 padding: 3px;
//                 width: 100%;

//                 .section1{
//                     width: 70%;
//                     display: flex;
//                     justify-content: space-between;
//                     flex-direction: row;
//                     align-items: center;

//                     .section11{
//                         display: flex;
//                         align-items: center;

//                         .section111{
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                             }
//                             margin-right: 4px;
//                         }

//                         .section112{
//                             .ownerName{
//                                 font-size: $base-font-size;
//                                 font-weight: 700;
//                             }
//                             .ownerSubscribers{
//                                 font-size: 12px;
//                                 color: $secondary-text;
//                             }
                            
//                         }
//                     }
//                     .section12{
//                         display: flex;
//                         width: 50%;
//                         justify-content: space-around;
//                         align-items: center;
//                         padding: 3px 3px;
//                         .subscribeButton{
//                             background-color: $button-color;
//                         }
//                         .likeButton{
//                             color: $background-color;
//                             background-color: $secondary-text;
//                             height: 40px;
//                             width: 80px;
//                             border-radius: 20px;
//                             display: flex;
//                             align-items: center;
//                             justify-content: center;
//                             cursor: pointer;
//                             .likeIcon{
//                                 font-size:30px;
//                                 background-color: $secondary-text;
//                                 color: $button-color;
//                                 border-radius: 50%;
//                             }
//                             .unLikeIcon{
//                                 font-size:30px;
//                                 background-color: $secondary-text;
//                                 border-radius: 50%;
//                             }
//                             p{
//                                 margin-left: 4px;
//                                 font-size: 22px;
//                                 font-weight: 700;
//                             }
//                         }
//                     }
//                 }
                
                    
//             }
//             .description{
//                 background-color: $secondary-color;
//                 border-radius: 20px;
//                 margin: 10px 0;
//                 padding: 10px;
//                 .section21{
//                     display: flex;
//                     flex-direction: row;
//                     color: $text-color;
//                     p{
//                         font-size: 14px;
//                         margin:5px 5px 5px 0 ;
//                     }
                    
//                 }
//                 .section22{
//                     .section221{
//                         font-weight: 700;
//                         font-size: 26px;
//                     }
//                     p{
//                         font-size: 22px;
//                     }
//                 }
//             }
//             .commentSection{
//                 display: flex;
//                 flex-direction: row;
//                 padding:10px 10px;
//                 .commentSection1{
//                     margin-right: 10px;
//                     p{
//                         font-size: 20px;
//                         font-weight: 700;
//                     }
//                 }
//                 .commentSection2{
//                     margin-left: 20px;
//                     width: 9%;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: space-between;
//                     align-items: center;
//                 }
//             }
//             .comments{
//                 .comments1{
//                     .comments11{
//                         display: flex;
//                         flex-direction: row;
//                         align-items: center;
//                         width: 100%;
//                         justify-content: space-between;
//                         padding:10px 10px;

//                         img{
//                             width: 45px;
//                             height: 45px;
//                             border-radius: 50%;
//                         }
//                         input{
//                             height: 30px;
//                             width: 60%;
//                             color: black;
//                         }
//                     }
//                     .divider{
//                         width: 100%;
//                         height: 1px;
//                         background-color: white;
//                         margin: 20px 0;
//                     }
//                 }
//             }
//             .channelComments{
//                 display: flex;
//                 flex-direction: column;
//                 padding: 10px 10px;
//                 width: 100%;
//                 .channelCommentsSection{
//                     display: flex;
//                     flex-direction: row;
//                     padding: 10px 0;
//                     width:100% ;
//                     align-items: center;
//                     height: auto;
//                     overflow-wrap: break-word;

//                     .channelCommentsSection1{
//                         img{
//                             width: 45px;
//                             height: 45px;
//                             border-radius: 50%;
//                             margin: 0 20px 0 0;
//                         }
//                     }
//                     .channelCommentsSection2{
//                         width: 100%;
//                         .channelCommentsSection21{
//                             display: flex;
//                             align-items: center;
//                             .channelCommentsSection211{
//                                 margin: 0 20px 0 0;
                                
//                             }
//                             .channelCommentsSection212{
//                                 color: $secondary-text;
//                             }
//                             .channelCommentsSection213{
//                                 margin-left: 2rem;
//                             }
//                             .commentDropdown{
//                                 position: absolute;
//                                 display: flex;
//                                 flex-direction: column;
//                                 margin-left: 300px;
//                                 button{
//                                     font-size: 10px;
//                                 }
//                             }
//                         }
//                         &2{
//                             height: auto;
//                             width: 100%;
//                             &1{
//                                 width: 100%;
//                                 word-break: break-word; /* Ensure long words break and wrap */
//                                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                                 white-space: normal;
//                             }
//                         }
//                         .channelCommensSection23{
//                             display: flex;
//                             flex-direction: row;
//                             justify-content: space-between;
//                             width: 30px;
//                             align-items: center;
//                             .channelCommensSection231{
//                                 // color: red;
//                                 .likeIcon{
//                                     color: red;
//                                 }
//                                 .unLikeIcon{
//                                     color:white;
//                                 }
//                             }
                            
//                             p{
//                                 color: $secondary-text;
//                             }
//                         }
//                     }
//                 }
//             }
            

//             video {
//                 width: 100%;
//                 border-radius: 20px;
//                 height: 35vw;
//                 // pointer-events: none;
//             }
    
//             button {
//                 margin-top: 10px;
//                 padding: 10px 20px;
//                 background-color: #4a4a4a;
//                 color: white;
//                 border: none;
//                 border-radius: 5px;
//                 cursor: pointer;
    
//                 &:hover {
//                     background-color: #6a6a6a;
//                 }
//             }
    
//             .video-title {
//                 width: 100%;
//                 color: white;
//                 font-weight: bold;
//                 font-size: 1.3rem;
//                 margin-top: 10px;
//             }
//         }
    
//         .watchVideo-right-side {
//             width: 30%;
//             display: flex;
//             flex-direction: column;
//             margin-right: 5px;
//             color: $text-color;
//             font-size: $base-font-size;
//             background-color: $background-color;
//             height: auto;
//             align-items: center;
//             .watchVideoSection{
//                 width: 50vh;
//                 display: flex;
//                 flex-direction: row;
//                 justify-content: space-between;
//                 padding: 5px;
//                 transition-duration: 0.5s;
//                 border-radius: 10px;

//                 &:hover{
//                     transform: scale(0.98);
//                     background-color: $hover-bg-color;
//                     box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                 }
//                 .watchVideoSection1{
//                     width: 45%;
//                     height: 15vh;
//                     display: flex;
//                     align-items: center;
//                     .watchVideoSection11{
//                         margin: 0 6px 0 0 ;
//                         width: 100%;
//                         height: 100%;
//                         border-radius: 5px;
//                         // object-fit:cover;
//                     }
//                 }
//                 .watchVideoSection2{
//                     width: 50%;
//                     .watchVideoSection21{
//                         .watchVideoSection211{
//                             font-size: 14px;
//                             font-weight: 700;
//                         }
//                     }
//                     .watchVideoSection22{
//                         margin-top: 5px;
//                         .watchVideoSection221{
//                             font-size: 13px;
//                             color: $secondary-text;
//                         }
//                     }
//                     .watchVideoSection23{
//                         display: flex;
//                         flex-direction: row;
//                         font-size: 12px;
//                         color: $secondary-text;
//                         .views{
//                             font-size: 12px;
//                         }
//                         .dot{
//                             font-size: 12px;
//                         }
//                         .time{
//                             font-size: 12px;
//                         }
//                     }
//                 }
//             }
//         }
    
//     }

// .editCommentContainer{
//     position: fixed;
//     left: 0;
//     top:0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: rgba(0, 0, 0, 0.571);
    
    
//     .editCommentContainer1{
//         width: 35%;
//         height: 25%;
//         background-color: black;
//         padding: 10px;
//         display: flex;
//         align-items: center;
//         flex-direction: column;
//         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//         transition: 0.4s;
//         border-radius: 10px;

//         &:hover{
//             transform: scale(0.98);
//         }
//         .editCommentContainer11{
//             font-size: 20px;
//             font-weight: 700;
//             margin-bottom: 10px;
//         }
//         .editCommentContainer12{
//             width: 100%;
//             display: flex;
//             flex-direction: column;
//             .editCommentContainer121{
//                 font-size: 16px;
//                 font-weight: 600;
//             }
//             .editCommentContainer122{
//                 color: black;
//                 border-radius: 5px;
//                 border: 2px solid black;
//                 margin-bottom: 10px;
//                 &:focus{
//                     outline: none;
//                     border-color: red;
//                 }
//             }
//         }

//         .formButtons{
//             width: 50%;
//             display: flex;
//             justify-content: center;

//             &1,&2{
//                 background-color: red;
//                 margin: 5px;
//                 padding: 5px;
//                 border-radius: 5px;

//                 &:hover{
//                     background-color: rgba(255, 0, 0, 0.649);
//                 }
//             }
//         }
//     }

// }


// @media(max-width:1280px){
//     .box{
//         padding:0vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             // position: fixed;
//             // height: 56px;
//             // width: 100vw;
//             // background-color:$background-color;
//             // z-index: 100;
//         }
//             // .displayer{
//             //     width: 100%;
//             //     background-color: aqua;
//             // }
//             // .left-side2{
//             //     position: fixed;
//             //     margin-top: 4%;
            
//             //     height: 100vh;
//             //     color: white;
//             //     background-color:$background-color;
//             //     z-index: 2;
//             // }
//             // .left-side {
//             //     position: fixed;
//             //     margin-top: 4%;
//             //     width: 15%;
//             //     height: 100vh;
//             //     color: white;
//             //     background-color:$background-color;
//             //     z-index: 2;
//             // }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 // margin-top:4%;
                
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             // // margin: 20px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 45vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     // background-color: #4a4a4a;
//                     // color: white;
//                     // border: none;
//                     // border-radius: 5px;
//                     // cursor: pointer;
        
//                     // &:hover {
//                     //     background-color: #6a6a6a;
//                     // }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     // color: white;
//                     // font-weight: bold;
//                     // font-size: 1.3rem;
//                     // margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 0;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 // color: $text-color;
//                 // font-size: $base-font-size;
//                 // background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 80vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
    
//                     // &:hover{
//                     //     transform: scale(0.98);
//                     //     background-color: $hover-bg-color;
//                     //     box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     // }
//                     .watchVideoSection1{
//                         width: 30%;
//                         height: 15vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 60%;
//                         .watchVideoSection21{
//                             // .watchVideoSection211{
//                             //     font-size: 26px;
//                             //     font-weight: 700;
//                             // }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             // .watchVideoSection221{
//                             //     font-size: 18px;
//                             //     color: $secondary-text;
//                             // }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             // color: $secondary-text;
//                             .views{
//                                 font-size: 14px;
//                             }
//                             .dot{
//                                 font-size: 14px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 14px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     // .editCommentContainer{
//     //     position: fixed;
//     //     left: 0;
//     //     top:0;
//     //     width: 100%;
//     //     height: 100%;
//     //     display: flex;
//     //     align-items: center;
//     //     justify-content: center;
//     //     background-color: rgba(0, 0, 0, 0.571);
        
        
//     //     .editCommentContainer1{
//     //         width: 35%;
//     //         height: 20%;
//     //         background-color: black;
//     //         padding: 10px;
//     //         display: flex;
//     //         align-items: center;
//     //         flex-direction: column;
//     //         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//     //         transition: 0.4s;
//     //         border-radius: 10px;
    
//     //         &:hover{
//     //             transform: scale(0.98);
//     //         }
//     //         .editCommentContainer11{
//     //             font-size: 20px;
//     //             font-weight: 700;
//     //             margin-bottom: 10px;
//     //         }
//     //         .editCommentContainer12{
//     //             width: 100%;
//     //             display: flex;
//     //             flex-direction: column;
//     //             .editCommentContainer121{
//     //                 font-size: 16px;
//     //                 font-weight: 600;
//     //             }
//     //             .editCommentContainer122{
//     //                 color: black;
//     //                 border-radius: 5px;
//     //                 border: 2px solid black;
//     //                 margin-bottom: 10px;
//     //                 &:focus{
//     //                     outline: none;
//     //                     border-color: red;
//     //                 }
//     //             }
//     //         }
    
//     //         .formButtons{
//     //             width: 50%;
//     //             display: flex;
//     //             justify-content: center;
    
//     //             &1,&2{
//     //                 background-color: red;
//     //                 margin: 5px;
//     //                 padding: 5px;
//     //                 border-radius: 5px;
    
//     //                 &:hover{
//     //                     background-color: rgba(255, 0, 0, 0.649);
//     //                 }
//     //             }
//     //         }
//     //     }
    
//     // }
// }

// @media(max-width:1024px){
//     video {
//         width: 100%;
//         border-radius: 20px;
//         height: 55vw;
//         // pointer-events: none;
//     }
// }

// @media(max-width:767px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 40px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 55vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 100px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 80vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
    
//                     &:hover{
//                         transform: scale(0.98);
//                         background-color: $hover-bg-color;
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 30%;
//                         height: 15vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 60%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 22px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 16px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 14px;
//                             }
//                             .dot{
//                                 font-size: 14px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 14px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         // position: fixed;
//         // left: 0;
//         // top:0;
//         // width: 100%;
//         // height: 100%;
//         // display: flex;
//         // align-items: center;
//         // justify-content: center;
//         // background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 45%;
//             height: 18%;
//             // background-color: black;
//             // padding: 10px;
//             // display: flex;
//             // align-items: center;
//             // flex-direction: column;
//             // box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             // transition: 0.4s;
//             // border-radius: 10px;
    
//             // &:hover{
//             //     transform: scale(0.98);
//             // }
//             // .editCommentContainer11{
//             //     font-size: 20px;
//             //     font-weight: 700;
//             //     margin-bottom: 10px;
//             // }
//             // .editCommentContainer12{
//             //     width: 100%;
//             //     display: flex;
//             //     flex-direction: column;
//             //     .editCommentContainer121{
//             //         font-size: 16px;
//             //         font-weight: 600;
//             //     }
//             //     .editCommentContainer122{
//             //         color: black;
//             //         border-radius: 5px;
//             //         border: 2px solid black;
//             //         margin-bottom: 10px;
//             //         &:focus{
//             //             outline: none;
//             //             border-color: red;
//             //         }
//             //     }
//             // }
    
//             // .formButtons{
//             //     width: 50%;
//             //     display: flex;
//             //     justify-content: center;
    
//             //     &1,&2{
//             //         background-color: red;
//             //         margin: 5px;
//             //         padding: 5px;
//             //         border-radius: 5px;
    
//             //         &:hover{
//             //             background-color: rgba(255, 0, 0, 0.649);
//             //         }
//             //     }
//             // }
//         }
    
//     }
// }

// @media(max-width:600px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 10px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 55vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 10px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 gap: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 95vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;
//                     border: 2px solid rgb(45, 45, 45);

//                     // gap: 2px;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
//                     background-color: $hover-bg-color;

//                     &:hover{
//                         transform: scale(1);
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 50%;
//                         height: 25vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 50%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 18px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 14px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 12px;
//                             }
//                             .dot{
//                                 font-size: 12px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 12px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         position: fixed;
//         left: 0;
//         top:0;
//         width: 100%;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 65%;
//             height: 25%;
//             background-color: black;
//             padding: 10px;
//             display: flex;
//             align-items: center;
//             flex-direction: column;
//             box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             transition: 0.4s;
//             border-radius: 10px;
    
//             &:hover{
//                 transform: scale(0.98);
//             }
//             .editCommentContainer11{
//                 font-size: 20px;
//                 font-weight: 700;
//                 margin-bottom: 10px;
//             }
//             .editCommentContainer12{
//                 width: 100%;
//                 display: flex;
//                 flex-direction: column;
//                 .editCommentContainer121{
//                     font-size: 16px;
//                     font-weight: 600;
//                 }
//                 .editCommentContainer122{
//                     color: black;
//                     border-radius: 5px;
//                     border: 2px solid black;
//                     margin-bottom: 10px;
//                     &:focus{
//                         outline: none;
//                         border-color: red;
//                     }
//                 }
//             }
    
//             .formButtons{
//                 width: 50%;
//                 display: flex;
//                 justify-content: center;
    
//                 &1,&2{
//                     background-color: red;
//                     margin: 5px;
//                     padding: 5px;
//                     border-radius: 5px;
    
//                     &:hover{
//                         background-color: rgba(255, 0, 0, 0.649);
//                     }
//                 }
//             }
//         }
    
//     }
// }

// @media(max-width:500px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 10px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 flex-direction: column;
//                 padding-right: 20px;
//                 .subscribeSection{
//                     display: flex;
//                     justify-content: space-between;
//                     padding: 3px;
//                     width: 100%;
    
//                     .section1{
//                         width: 100%;
//                         display: flex;
//                         justify-content: space-between;
//                         flex-direction: row;
//                         align-items: center;
    
//                         .section11{
//                             display: flex;
//                             align-items: center;
    
//                             .section111{
//                                 img{
//                                     width: 45px;
//                                     height: 45px;
//                                     border-radius: 50%;
//                                 }
//                                 margin-right: 4px;
//                             }
    
//                             .section112{
//                                 .ownerName{
//                                     font-size: $base-font-size;
//                                     font-weight: 700;
//                                 }
//                                 .ownerSubscribers{
//                                     font-size: 12px;
//                                     color: $secondary-text;
//                                 }
                                
//                             }
//                         }
//                         .section12{
//                             display: flex;
//                             width: 50%;
//                             justify-content: space-around;
//                             align-items: center;
//                             padding: 3px 3px;
//                             .subscribeButton{
//                                 background-color: $button-color;
//                             }
//                             .likeButton{
//                                 color: $background-color;
//                                 background-color: $secondary-text;
//                                 height: 40px;
//                                 width: 70px;
//                                 border-radius: 20px;
//                                 display: flex;
//                                 align-items: center;
//                                 justify-content: center;
//                                 cursor: pointer;
//                                 .likeIcon{
//                                     font-size:30px;
//                                     background-color: $secondary-text;
//                                     color: $button-color;
//                                     border-radius: 50%;
//                                 }
//                                 .unLikeIcon{
//                                     font-size:30px;
//                                     background-color: $secondary-text;
//                                     border-radius: 50%;
//                                 }
//                                 p{
//                                     margin-left: 4px;
//                                     font-size: 22px;
//                                     font-weight: 700;
//                                 }
//                             }
//                         }
//                     }
                    
                        
//                 }
//                 .description{
//                     background-color: $secondary-color;
//                     border-radius: 20px;
//                     margin: 10px 0;
//                     padding: 10px;
//                     .section21{
//                         display: flex;
//                         flex-direction: row;
//                         color: $text-color;
//                         p{
//                             font-size: 14px;
//                             margin:5px 5px 5px 0 ;
//                         }
                        
//                     }
//                     .section22{
//                         .section221{
//                             font-weight: 700;
//                             font-size: 26px;
//                         }
//                         p{
//                             font-size: 18px;
//                         }
//                     }
//                 }
//                 .commentSection{
//                     display: flex;
//                     flex-direction: row;
//                     padding:10px 10px;
//                     .commentSection1{
//                         margin-right: 10px;
//                         p{
//                             font-size: 20px;
//                             font-weight: 700;
//                         }
//                     }
//                     .commentSection2{
//                         margin-left: 20px;
//                         width: 20%;
//                         display: flex;
//                         flex-direction: row;
//                         justify-content: space-between;
//                         align-items: center;
//                     }
//                 }
//                 .comments{
//                     .comments1{
                        

//                         .comments11{
//                             display: flex;
//                             flex-direction: row;
//                             align-items: center;
//                             width: 100%;
//                             justify-content: space-between;
//                             padding:10px 10px;
    
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                             }
//                             input{
//                                 height: 35px;
//                                 width: 40%;
//                                 color: black;
//                             }
//                         }
//                         .divider{
//                             width: 100%;
//                             height: 1px;
//                             background-color: white;
//                             margin: 20px 0;
//                         }
//                     }
//                 }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     .channelCommentsSection{
//                         display: flex;
//                         flex-direction: row;
//                         padding: 10px 0;
//                         width:100% ;
//                         align-items: center;
//                         height: auto;
//                         overflow-wrap: break-word;
    
//                         .channelCommentsSection1{
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                                 margin: 0 20px 0 0;
//                             }
//                         }
//                         .channelCommentsSection2{
//                             width: 100%;
//                             .channelCommentsSection21{
//                                 display: flex;
//                                 align-items: center;
//                                 .channelCommentsSection211{
//                                     margin: 0 20px 0 0;
                                    
//                                 }
//                                 .channelCommentsSection212{
//                                     color: $secondary-text;
//                                 }
//                                 .channelCommentsSection213{
//                                     margin-left: 2rem;
//                                 }
//                                 .commentDropdown{
//                                     position: absolute;
//                                     display: flex;
//                                     flex-direction: column;
//                                     margin-left: 300px;
//                                     button{
//                                         font-size: 10px;
//                                     }
//                                 }
//                             }
//                             &2{
//                                 height: auto;
//                                 width: 100%;
//                                 &1{
//                                     width: 100%;
//                                     word-break: break-word; /* Ensure long words break and wrap */
//                                     overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                                     white-space: normal;
//                                 }
//                             }
//                             .channelCommensSection23{
//                                 display: flex;
//                                 flex-direction: row;
//                                 justify-content: space-between;
//                                 width: 30px;
//                                 align-items: center;
//                                 .channelCommensSection231{
//                                     // color: red;
//                                     .likeIcon{
//                                         color: red;
//                                     }
//                                     .unLikeIcon{
//                                         color:white;
//                                     }
//                                 }
                                
//                                 p{
//                                     color: $secondary-text;
//                                 }
//                             }
//                         }
//                     }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 53vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 9px 15px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 // height: 60vw;
//                 padding: 20px 15px 20vw 0px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 0px;
//                 gap: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 98vw;
//                     height: 75vw;
//                     display: flex;
//                     flex-direction: column;
//                     justify-content: flex-start;
//                     border: 2px solid rgb(45, 45, 45);

//                     // gap: 2px;

//                     padding-right: 0px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
//                     background-color: $hover-bg-color;

//                     &:hover{
//                         transform: scale(1);
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 100%;
//                         height: 47vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 0px;
//                         .watchVideoSection11{
//                             margin: 0 0px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 100%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 18px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 14px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 12px;
//                             }
//                             .dot{
//                                 font-size: 12px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 12px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         position: fixed;
//         left: 0;
//         top:0;
//         width: 100%;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 75%;
//             height: 20%;
//             background-color: black;
//             padding: 10px;
//             display: flex;
//             align-items: center;
//             flex-direction: column;
//             box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             transition: 0.4s;
//             border-radius: 10px;
    
//             &:hover{
//                 transform: scale(0.98);
//             }
//             .editCommentContainer11{
//                 font-size: 20px;
//                 font-weight: 700;
//                 margin-bottom: 10px;
//             }
//             .editCommentContainer12{
//                 width: 100%;
//                 display: flex;
//                 flex-direction: column;
//                 .editCommentContainer121{
//                     font-size: 16px;
//                     font-weight: 600;
//                 }
//                 .editCommentContainer122{
//                     color: black;
//                     border-radius: 5px;
//                     border: 2px solid black;
//                     margin-bottom: 10px;
//                     &:focus{
//                         outline: none;
//                         border-color: red;
//                     }
//                 }
//             }
    
//             .formButtons{
//                 width: 50%;
//                 display: flex;
//                 justify-content: center;
    
//                 &1,&2{
//                     background-color: red;
//                     margin: 5px;
//                     padding: 5px;
//                     border-radius: 5px;
    
//                     &:hover{
//                         background-color: rgba(255, 0, 0, 0.649);
//                     }
//                 }
//             }
//         }
    
//     }
// }


// // @media(max-width:360px){
    
// // }



// // *{
// //     background-color:#0f0f0f;
// // }

// // body{
// //     background-color:#0f0f0f;
// // }
// @import '../../index.scss';

// .box{
//     padding:0vw;
//     width: 99%;
//     height: auto;
//     .SearchBar{
//         position: fixed;
//         height: 56px;
//         width: 100vw;
//         background-color:$background-color;
//         z-index: 100;
//     }
//         .displayer{
//             width: 100%;
//             background-color: aqua;
//         }
//         .left-side2{
//             position: fixed;
//             margin-top: 4%;
        
//             height: 100vh;
//             color: white;
//             background-color:$background-color;
//             z-index: 2;
//         }
//         .left-side {
//             position: fixed;
//             margin-top: 4%;
//             width: 15%;
//             height: 100vh;
//             color: white;
//             background-color:$background-color;
//             z-index: 2;
//         }
//         .right-side-WithNav {
//             // width: 100%;
//             // height: auto;
//             // display: flex;
//             // flex-direction: column;
//             // background-color:$background-color;
            
//         }
//         .right-side-WithoutNav{
//             margin-top:4%;
            
//             width: 100%;
//             height: auto;
//             display: flex;
//             flex-direction: column;
//             background-color:$background-color;
            
//         }
//     }
    
    
//     .watchVideo-container {
//         background-color: $background-color;
//         display: flex;
//         justify-content: space-between;
//         // margin: 20px;
//         margin-top: 5px;
//         height: auto;
    
//         width: 100%;
//         height: 100vh;
    
//         .watchVideo-left-side {
//             width: 68%;
//             height: auto;
//             display: flex;
        
//             flex-direction: column;
//             padding-right: 20px;
//             .subscribeSection{
//                 display: flex;
//                 justify-content: space-between;
//                 padding: 3px;
//                 width: 100%;

//                 .section1{
//                     width: 70%;
//                     display: flex;
//                     justify-content: space-between;
//                     flex-direction: row;
//                     align-items: center;

//                     .section11{
//                         display: flex;
//                         align-items: center;

//                         .section111{
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                             }
//                             margin-right: 4px;
//                         }

//                         .section112{
//                             .ownerName{
//                                 font-size: $base-font-size;
//                                 font-weight: 700;
//                             }
//                             .ownerSubscribers{
//                                 font-size: 12px;
//                                 color: $secondary-text;
//                             }
                            
//                         }
//                     }
//                     .section12{
//                         display: flex;
//                         width: 50%;
//                         justify-content: space-around;
//                         align-items: center;
//                         padding: 3px 3px;
//                         .subscribeButton{
//                             background-color: $button-color;
//                         }
//                         .likeButton{
//                             color: $background-color;
//                             background-color: $secondary-text;
//                             height: 40px;
//                             width: 80px;
//                             border-radius: 20px;
//                             display: flex;
//                             align-items: center;
//                             justify-content: center;
//                             cursor: pointer;
//                             .likeIcon{
//                                 font-size:30px;
//                                 background-color: $secondary-text;
//                                 color: $button-color;
//                                 border-radius: 50%;
//                             }
//                             .unLikeIcon{
//                                 font-size:30px;
//                                 background-color: $secondary-text;
//                                 border-radius: 50%;
//                             }
//                             p{
//                                 margin-left: 4px;
//                                 font-size: 22px;
//                                 font-weight: 700;
//                             }
//                         }
//                     }
//                 }
                
                    
//             }
//             .description{
//                 background-color: $secondary-color;
//                 border-radius: 20px;
//                 margin: 10px 0;
//                 padding: 10px;
//                 .section21{
//                     display: flex;
//                     flex-direction: row;
//                     color: $text-color;
//                     p{
//                         font-size: 14px;
//                         margin:5px 5px 5px 0 ;
//                     }
                    
//                 }
//                 .section22{
//                     .section221{
//                         font-weight: 700;
//                         font-size: 26px;
//                     }
//                     p{
//                         font-size: 22px;
//                     }
//                 }
//             }
//             .commentSection{
//                 display: flex;
//                 flex-direction: row;
//                 padding:10px 10px;
//                 .commentSection1{
//                     margin-right: 10px;
//                     p{
//                         font-size: 20px;
//                         font-weight: 700;
//                     }
//                 }
//                 .commentSection2{
//                     margin-left: 20px;
//                     width: 9%;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: space-between;
//                     align-items: center;
//                 }
//             }
//             .comments{
//                 .comments1{
//                     .comments11{
//                         display: flex;
//                         flex-direction: row;
//                         align-items: center;
//                         width: 100%;
//                         justify-content: space-between;
//                         padding:10px 10px;

//                         img{
//                             width: 45px;
//                             height: 45px;
//                             border-radius: 50%;
//                         }
//                         input{
//                             height: 30px;
//                             width: 60%;
//                             color: black;
//                         }
//                     }
//                     .divider{
//                         width: 100%;
//                         height: 1px;
//                         background-color: white;
//                         margin: 20px 0;
//                     }
//                 }
//             }
//             .channelComments{
//                 display: flex;
//                 flex-direction: column;
//                 padding: 10px 10px;
//                 width: 100%;
//                 .channelCommentsSection{
//                     display: flex;
//                     flex-direction: row;
//                     padding: 10px 0;
//                     width:100% ;
//                     align-items: center;
//                     height: auto;
//                     overflow-wrap: break-word;

//                     .channelCommentsSection1{
//                         img{
//                             width: 45px;
//                             height: 45px;
//                             border-radius: 50%;
//                             margin: 0 20px 0 0;
//                         }
//                     }
//                     .channelCommentsSection2{
//                         width: 100%;
//                         .channelCommentsSection21{
//                             display: flex;
//                             align-items: center;
//                             .channelCommentsSection211{
//                                 margin: 0 20px 0 0;
                                
//                             }
//                             .channelCommentsSection212{
//                                 color: $secondary-text;
//                             }
//                             .channelCommentsSection213{
//                                 margin-left: 2rem;
//                             }
//                             .commentDropdown{
//                                 position: absolute;
//                                 display: flex;
//                                 flex-direction: column;
//                                 margin-left: 300px;
//                                 button{
//                                     font-size: 10px;
//                                 }
//                             }
//                         }
//                         &2{
//                             height: auto;
//                             width: 100%;
//                             &1{
//                                 width: 100%;
//                                 word-break: break-word; /* Ensure long words break and wrap */
//                                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                                 white-space: normal;
//                             }
//                         }
//                         .channelCommensSection23{
//                             display: flex;
//                             flex-direction: row;
//                             justify-content: space-between;
//                             width: 30px;
//                             align-items: center;
//                             .channelCommensSection231{
//                                 // color: red;
//                                 .likeIcon{
//                                     color: red;
//                                 }
//                                 .unLikeIcon{
//                                     color:white;
//                                 }
//                             }
                            
//                             p{
//                                 color: $secondary-text;
//                             }
//                         }
//                     }
//                 }
//             }
            

//             video {
//                 width: 100%;
//                 border-radius: 20px;
//                 height: 35vw;
//                 // pointer-events: none;
//             }
    
//             button {
//                 margin-top: 10px;
//                 padding: 10px 20px;
//                 background-color: #4a4a4a;
//                 color: white;
//                 border: none;
//                 border-radius: 5px;
//                 cursor: pointer;
    
//                 &:hover {
//                     background-color: #6a6a6a;
//                 }
//             }
    
//             .video-title {
//                 width: 100%;
//                 color: white;
//                 font-weight: bold;
//                 font-size: 1.3rem;
//                 margin-top: 10px;
//             }
//         }
    
//         .watchVideo-right-side {
//             width: 30%;
//             display: flex;
//             flex-direction: column;
//             margin-right: 5px;
//             color: $text-color;
//             font-size: $base-font-size;
//             background-color: $background-color;
//             height: auto;
//             align-items: center;
//             .watchVideoSection{
//                 width: 50vh;
//                 display: flex;
//                 flex-direction: row;
//                 justify-content: space-between;
//                 padding: 5px;
//                 transition-duration: 0.5s;
//                 border-radius: 10px;

//                 &:hover{
//                     transform: scale(0.98);
//                     background-color: $hover-bg-color;
//                     box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                 }
//                 .watchVideoSection1{
//                     width: 45%;
//                     height: 15vh;
//                     display: flex;
//                     align-items: center;
//                     .watchVideoSection11{
//                         margin: 0 6px 0 0 ;
//                         width: 100%;
//                         height: 100%;
//                         border-radius: 5px;
//                         // object-fit:cover;
//                     }
//                 }
//                 .watchVideoSection2{
//                     width: 50%;
//                     .watchVideoSection21{
//                         .watchVideoSection211{
//                             font-size: 14px;
//                             font-weight: 700;
//                         }
//                     }
//                     .watchVideoSection22{
//                         margin-top: 5px;
//                         .watchVideoSection221{
//                             font-size: 13px;
//                             color: $secondary-text;
//                         }
//                     }
//                     .watchVideoSection23{
//                         display: flex;
//                         flex-direction: row;
//                         font-size: 12px;
//                         color: $secondary-text;
//                         .views{
//                             font-size: 12px;
//                         }
//                         .dot{
//                             font-size: 12px;
//                         }
//                         .time{
//                             font-size: 12px;
//                         }
//                     }
//                 }
//             }
//         }
    
//     }

// .editCommentContainer{
//     position: fixed;
//     left: 0;
//     top:0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: rgba(0, 0, 0, 0.571);
    
    
//     .editCommentContainer1{
//         width: 35%;
//         height: 25%;
//         background-color: black;
//         padding: 10px;
//         display: flex;
//         align-items: center;
//         flex-direction: column;
//         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//         transition: 0.4s;
//         border-radius: 10px;

//         &:hover{
//             transform: scale(0.98);
//         }
//         .editCommentContainer11{
//             font-size: 20px;
//             font-weight: 700;
//             margin-bottom: 10px;
//         }
//         .editCommentContainer12{
//             width: 100%;
//             display: flex;
//             flex-direction: column;
//             .editCommentContainer121{
//                 font-size: 16px;
//                 font-weight: 600;
//             }
//             .editCommentContainer122{
//                 color: black;
//                 border-radius: 5px;
//                 border: 2px solid black;
//                 margin-bottom: 10px;
//                 &:focus{
//                     outline: none;
//                     border-color: red;
//                 }
//             }
//         }

//         .formButtons{
//             width: 50%;
//             display: flex;
//             justify-content: center;

//             &1,&2{
//                 background-color: red;
//                 margin: 5px;
//                 padding: 5px;
//                 border-radius: 5px;

//                 &:hover{
//                     background-color: rgba(255, 0, 0, 0.649);
//                 }
//             }
//         }
//     }

// }


// @media(max-width:1280px){
//     .box{
//         padding:0vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             // position: fixed;
//             // height: 56px;
//             // width: 100vw;
//             // background-color:$background-color;
//             // z-index: 100;
//         }
//             // .displayer{
//             //     width: 100%;
//             //     background-color: aqua;
//             // }
//             // .left-side2{
//             //     position: fixed;
//             //     margin-top: 4%;
            
//             //     height: 100vh;
//             //     color: white;
//             //     background-color:$background-color;
//             //     z-index: 2;
//             // }
//             // .left-side {
//             //     position: fixed;
//             //     margin-top: 4%;
//             //     width: 15%;
//             //     height: 100vh;
//             //     color: white;
//             //     background-color:$background-color;
//             //     z-index: 2;
//             // }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 // margin-top:4%;
                
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             // // margin: 20px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 45vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     // background-color: #4a4a4a;
//                     // color: white;
//                     // border: none;
//                     // border-radius: 5px;
//                     // cursor: pointer;
        
//                     // &:hover {
//                     //     background-color: #6a6a6a;
//                     // }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     // color: white;
//                     // font-weight: bold;
//                     // font-size: 1.3rem;
//                     // margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 0;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 // color: $text-color;
//                 // font-size: $base-font-size;
//                 // background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 80vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
    
//                     // &:hover{
//                     //     transform: scale(0.98);
//                     //     background-color: $hover-bg-color;
//                     //     box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     // }
//                     .watchVideoSection1{
//                         width: 30%;
//                         height: 15vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 60%;
//                         .watchVideoSection21{
//                             // .watchVideoSection211{
//                             //     font-size: 26px;
//                             //     font-weight: 700;
//                             // }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             // .watchVideoSection221{
//                             //     font-size: 18px;
//                             //     color: $secondary-text;
//                             // }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             // color: $secondary-text;
//                             .views{
//                                 font-size: 14px;
//                             }
//                             .dot{
//                                 font-size: 14px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 14px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     // .editCommentContainer{
//     //     position: fixed;
//     //     left: 0;
//     //     top:0;
//     //     width: 100%;
//     //     height: 100%;
//     //     display: flex;
//     //     align-items: center;
//     //     justify-content: center;
//     //     background-color: rgba(0, 0, 0, 0.571);
        
        
//     //     .editCommentContainer1{
//     //         width: 35%;
//     //         height: 20%;
//     //         background-color: black;
//     //         padding: 10px;
//     //         display: flex;
//     //         align-items: center;
//     //         flex-direction: column;
//     //         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//     //         transition: 0.4s;
//     //         border-radius: 10px;
    
//     //         &:hover{
//     //             transform: scale(0.98);
//     //         }
//     //         .editCommentContainer11{
//     //             font-size: 20px;
//     //             font-weight: 700;
//     //             margin-bottom: 10px;
//     //         }
//     //         .editCommentContainer12{
//     //             width: 100%;
//     //             display: flex;
//     //             flex-direction: column;
//     //             .editCommentContainer121{
//     //                 font-size: 16px;
//     //                 font-weight: 600;
//     //             }
//     //             .editCommentContainer122{
//     //                 color: black;
//     //                 border-radius: 5px;
//     //                 border: 2px solid black;
//     //                 margin-bottom: 10px;
//     //                 &:focus{
//     //                     outline: none;
//     //                     border-color: red;
//     //                 }
//     //             }
//     //         }
    
//     //         .formButtons{
//     //             width: 50%;
//     //             display: flex;
//     //             justify-content: center;
    
//     //             &1,&2{
//     //                 background-color: red;
//     //                 margin: 5px;
//     //                 padding: 5px;
//     //                 border-radius: 5px;
    
//     //                 &:hover{
//     //                     background-color: rgba(255, 0, 0, 0.649);
//     //                 }
//     //             }
//     //         }
//     //     }
    
//     // }
// }

// @media(max-width:1024px){
//     video {
//         width: 100%;
//         border-radius: 20px;
//         height: 55vw;
//         // pointer-events: none;
//     }
// }

// @media(max-width:767px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 40px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 55vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 100px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 80vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
    
//                     &:hover{
//                         transform: scale(0.98);
//                         background-color: $hover-bg-color;
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 30%;
//                         height: 15vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 60%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 22px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 16px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 14px;
//                             }
//                             .dot{
//                                 font-size: 14px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 14px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         // position: fixed;
//         // left: 0;
//         // top:0;
//         // width: 100%;
//         // height: 100%;
//         // display: flex;
//         // align-items: center;
//         // justify-content: center;
//         // background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 45%;
//             height: 18%;
//             // background-color: black;
//             // padding: 10px;
//             // display: flex;
//             // align-items: center;
//             // flex-direction: column;
//             // box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             // transition: 0.4s;
//             // border-radius: 10px;
    
//             // &:hover{
//             //     transform: scale(0.98);
//             // }
//             // .editCommentContainer11{
//             //     font-size: 20px;
//             //     font-weight: 700;
//             //     margin-bottom: 10px;
//             // }
//             // .editCommentContainer12{
//             //     width: 100%;
//             //     display: flex;
//             //     flex-direction: column;
//             //     .editCommentContainer121{
//             //         font-size: 16px;
//             //         font-weight: 600;
//             //     }
//             //     .editCommentContainer122{
//             //         color: black;
//             //         border-radius: 5px;
//             //         border: 2px solid black;
//             //         margin-bottom: 10px;
//             //         &:focus{
//             //             outline: none;
//             //             border-color: red;
//             //         }
//             //     }
//             // }
    
//             // .formButtons{
//             //     width: 50%;
//             //     display: flex;
//             //     justify-content: center;
    
//             //     &1,&2{
//             //         background-color: red;
//             //         margin: 5px;
//             //         padding: 5px;
//             //         border-radius: 5px;
    
//             //         &:hover{
//             //             background-color: rgba(255, 0, 0, 0.649);
//             //         }
//             //     }
//             // }
//         }
    
//     }
// }

// @media(max-width:600px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 10px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 55vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 10px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 gap: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 95vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;
//                     border: 2px solid rgb(45, 45, 45);

//                     // gap: 2px;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
//                     background-color: $hover-bg-color;

//                     &:hover{
//                         transform: scale(1);
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 50%;
//                         height: 25vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 50%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 18px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 14px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 12px;
//                             }
//                             .dot{
//                                 font-size: 12px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 12px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         position: fixed;
//         left: 0;
//         top:0;
//         width: 100%;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 65%;
//             height: 25%;
//             background-color: black;
//             padding: 10px;
//             display: flex;
//             align-items: center;
//             flex-direction: column;
//             box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             transition: 0.4s;
//             border-radius: 10px;
    
//             &:hover{
//                 transform: scale(0.98);
//             }
//             .editCommentContainer11{
//                 font-size: 20px;
//                 font-weight: 700;
//                 margin-bottom: 10px;
//             }
//             .editCommentContainer12{
//                 width: 100%;
//                 display: flex;
//                 flex-direction: column;
//                 .editCommentContainer121{
//                     font-size: 16px;
//                     font-weight: 600;
//                 }
//                 .editCommentContainer122{
//                     color: black;
//                     border-radius: 5px;
//                     border: 2px solid black;
//                     margin-bottom: 10px;
//                     &:focus{
//                         outline: none;
//                         border-color: red;
//                     }
//                 }
//             }
    
//             .formButtons{
//                 width: 50%;
//                 display: flex;
//                 justify-content: center;
    
//                 &1,&2{
//                     background-color: red;
//                     margin: 5px;
//                     padding: 5px;
//                     border-radius: 5px;
    
//                     &:hover{
//                         background-color: rgba(255, 0, 0, 0.649);
//                     }
//                 }
//             }
//         }
    
//     }
// }

// @media(max-width:500px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 10px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 flex-direction: column;
//                 padding-right: 20px;
//                 .subscribeSection{
//                     display: flex;
//                     justify-content: space-between;
//                     padding: 3px;
//                     width: 100%;
    
//                     .section1{
//                         width: 100%;
//                         display: flex;
//                         justify-content: space-between;
//                         flex-direction: row;
//                         align-items: center;
    
//                         .section11{
//                             display: flex;
//                             align-items: center;
    
//                             .section111{
//                                 img{
//                                     width: 45px;
//                                     height: 45px;
//                                     border-radius: 50%;
//                                 }
//                                 margin-right: 4px;
//                             }
    
//                             .section112{
//                                 .ownerName{
//                                     font-size: $base-font-size;
//                                     font-weight: 700;
//                                 }
//                                 .ownerSubscribers{
//                                     font-size: 12px;
//                                     color: $secondary-text;
//                                 }
                                
//                             }
//                         }
//                         .section12{
//                             display: flex;
//                             width: 50%;
//                             justify-content: space-around;
//                             align-items: center;
//                             padding: 3px 3px;
//                             .subscribeButton{
//                                 background-color: $button-color;
//                             }
//                             .likeButton{
//                                 color: $background-color;
//                                 background-color: $secondary-text;
//                                 height: 40px;
//                                 width: 70px;
//                                 border-radius: 20px;
//                                 display: flex;
//                                 align-items: center;
//                                 justify-content: center;
//                                 cursor: pointer;
//                                 .likeIcon{
//                                     font-size:30px;
//                                     background-color: $secondary-text;
//                                     color: $button-color;
//                                     border-radius: 50%;
//                                 }
//                                 .unLikeIcon{
//                                     font-size:30px;
//                                     background-color: $secondary-text;
//                                     border-radius: 50%;
//                                 }
//                                 p{
//                                     margin-left: 4px;
//                                     font-size: 22px;
//                                     font-weight: 700;
//                                 }
//                             }
//                         }
//                     }
                    
                        
//                 }
//                 .description{
//                     background-color: $secondary-color;
//                     border-radius: 20px;
//                     margin: 10px 0;
//                     padding: 10px;
//                     .section21{
//                         display: flex;
//                         flex-direction: row;
//                         color: $text-color;
//                         p{
//                             font-size: 14px;
//                             margin:5px 5px 5px 0 ;
//                         }
                        
//                     }
//                     .section22{
//                         .section221{
//                             font-weight: 700;
//                             font-size: 26px;
//                         }
//                         p{
//                             font-size: 18px;
//                         }
//                     }
//                 }
//                 .commentSection{
//                     display: flex;
//                     flex-direction: row;
//                     padding:10px 10px;
//                     .commentSection1{
//                         margin-right: 10px;
//                         p{
//                             font-size: 20px;
//                             font-weight: 700;
//                         }
//                     }
//                     .commentSection2{
//                         margin-left: 20px;
//                         width: 20%;
//                         display: flex;
//                         flex-direction: row;
//                         justify-content: space-between;
//                         align-items: center;
//                     }
//                 }
//                 .comments{
//                     .comments1{
                        

//                         .comments11{
//                             display: flex;
//                             flex-direction: row;
//                             align-items: center;
//                             width: 100%;
//                             justify-content: space-between;
//                             padding:10px 10px;
    
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                             }
//                             input{
//                                 height: 35px;
//                                 width: 40%;
//                                 color: black;
//                             }
//                         }
//                         .divider{
//                             width: 100%;
//                             height: 1px;
//                             background-color: white;
//                             margin: 20px 0;
//                         }
//                     }
//                 }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     .channelCommentsSection{
//                         display: flex;
//                         flex-direction: row;
//                         padding: 10px 0;
//                         width:100% ;
//                         align-items: center;
//                         height: auto;
//                         overflow-wrap: break-word;
    
//                         .channelCommentsSection1{
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                                 margin: 0 20px 0 0;
//                             }
//                         }
//                         .channelCommentsSection2{
//                             width: 100%;
//                             .channelCommentsSection21{
//                                 display: flex;
//                                 align-items: center;
//                                 .channelCommentsSection211{
//                                     margin: 0 20px 0 0;
                                    
//                                 }
//                                 .channelCommentsSection212{
//                                     color: $secondary-text;
//                                 }
//                                 .channelCommentsSection213{
//                                     margin-left: 2rem;
//                                 }
//                                 .commentDropdown{
//                                     position: absolute;
//                                     display: flex;
//                                     flex-direction: column;
//                                     margin-left: 300px;
//                                     button{
//                                         font-size: 10px;
//                                     }
//                                 }
//                             }
//                             &2{
//                                 height: auto;
//                                 width: 100%;
//                                 &1{
//                                     width: 100%;
//                                     word-break: break-word; /* Ensure long words break and wrap */
//                                     overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                                     white-space: normal;
//                                 }
//                             }
//                             .channelCommensSection23{
//                                 display: flex;
//                                 flex-direction: row;
//                                 justify-content: space-between;
//                                 width: 30px;
//                                 align-items: center;
//                                 .channelCommensSection231{
//                                     // color: red;
//                                     .likeIcon{
//                                         color: red;
//                                     }
//                                     .unLikeIcon{
//                                         color:white;
//                                     }
//                                 }
                                
//                                 p{
//                                     color: $secondary-text;
//                                 }
//                             }
//                         }
//                     }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 53vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 9px 15px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 // height: 60vw;
//                 padding: 20px 15px 20vw 0px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 0px;
//                 gap: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 98vw;
//                     height: 75vw;
//                     display: flex;
//                     flex-direction: column;
//                     justify-content: flex-start;
//                     border: 2px solid rgb(45, 45, 45);

//                     // gap: 2px;

//                     padding-right: 0px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
//                     background-color: $hover-bg-color;

//                     &:hover{
//                         transform: scale(1);
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 100%;
//                         height: 47vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 0px;
//                         .watchVideoSection11{
//                             margin: 0 0px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 100%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 18px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 14px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 12px;
//                             }
//                             .dot{
//                                 font-size: 12px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 12px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         position: fixed;
//         left: 0;
//         top:0;
//         width: 100%;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 75%;
//             height: 20%;
//             background-color: black;
//             padding: 10px;
//             display: flex;
//             align-items: center;
//             flex-direction: column;
//             box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             transition: 0.4s;
//             border-radius: 10px;
    
//             &:hover{
//                 transform: scale(0.98);
//             }
//             .editCommentContainer11{
//                 font-size: 20px;
//                 font-weight: 700;
//                 margin-bottom: 10px;
//             }
//             .editCommentContainer12{
//                 width: 100%;
//                 display: flex;
//                 flex-direction: column;
//                 .editCommentContainer121{
//                     font-size: 16px;
//                     font-weight: 600;
//                 }
//                 .editCommentContainer122{
//                     color: black;
//                     border-radius: 5px;
//                     border: 2px solid black;
//                     margin-bottom: 10px;
//                     &:focus{
//                         outline: none;
//                         border-color: red;
//                     }
//                 }
//             }
    
//             .formButtons{
//                 width: 50%;
//                 display: flex;
//                 justify-content: center;
    
//                 &1,&2{
//                     background-color: red;
//                     margin: 5px;
//                     padding: 5px;
//                     border-radius: 5px;
    
//                     &:hover{
//                         background-color: rgba(255, 0, 0, 0.649);
//                     }
//                 }
//             }
//         }
    
//     }
// }


// // @media(max-width:360px){
    
// // }


// // *{
// //     background-color:#0f0f0f;
// // }

// // body{
// //     background-color:#0f0f0f;
// // }
// @import '../../index.scss';

// .box{
//     padding:0vw;
//     width: 99%;
//     height: auto;
//     .SearchBar{
//         position: fixed;
//         height: 56px;
//         width: 100vw;
//         background-color:$background-color;
//         z-index: 100;
//     }
//         .displayer{
//             width: 100%;
//             background-color: aqua;
//         }
//         .left-side2{
//             position: fixed;
//             margin-top: 4%;
        
//             height: 100vh;
//             color: white;
//             background-color:$background-color;
//             z-index: 2;
//         }
//         .left-side {
//             position: fixed;
//             margin-top: 4%;
//             width: 15%;
//             height: 100vh;
//             color: white;
//             background-color:$background-color;
//             z-index: 2;
//         }
//         .right-side-WithNav {
//             // width: 100%;
//             // height: auto;
//             // display: flex;
//             // flex-direction: column;
//             // background-color:$background-color;
            
//         }
//         .right-side-WithoutNav{
//             margin-top:4%;
            
//             width: 100%;
//             height: auto;
//             display: flex;
//             flex-direction: column;
//             background-color:$background-color;
            
//         }
//     }
    
    
//     .watchVideo-container {
//         background-color: $background-color;
//         display: flex;
//         justify-content: space-between;
//         // margin: 20px;
//         margin-top: 5px;
//         height: auto;
    
//         width: 100%;
//         height: 100vh;
    
//         .watchVideo-left-side {
//             width: 68%;
//             height: auto;
//             display: flex;
        
//             flex-direction: column;
//             padding-right: 20px;
//             .subscribeSection{
//                 display: flex;
//                 justify-content: space-between;
//                 padding: 3px;
//                 width: 100%;

//                 .section1{
//                     width: 70%;
//                     display: flex;
//                     justify-content: space-between;
//                     flex-direction: row;
//                     align-items: center;

//                     .section11{
//                         display: flex;
//                         align-items: center;

//                         .section111{
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                             }
//                             margin-right: 4px;
//                         }

//                         .section112{
//                             .ownerName{
//                                 font-size: $base-font-size;
//                                 font-weight: 700;
//                             }
//                             .ownerSubscribers{
//                                 font-size: 12px;
//                                 color: $secondary-text;
//                             }
                            
//                         }
//                     }
//                     .section12{
//                         display: flex;
//                         width: 50%;
//                         justify-content: space-around;
//                         align-items: center;
//                         padding: 3px 3px;
//                         .subscribeButton{
//                             background-color: $button-color;
//                         }
//                         .likeButton{
//                             color: $background-color;
//                             background-color: $secondary-text;
//                             height: 40px;
//                             width: 80px;
//                             border-radius: 20px;
//                             display: flex;
//                             align-items: center;
//                             justify-content: center;
//                             cursor: pointer;
//                             .likeIcon{
//                                 font-size:30px;
//                                 background-color: $secondary-text;
//                                 color: $button-color;
//                                 border-radius: 50%;
//                             }
//                             .unLikeIcon{
//                                 font-size:30px;
//                                 background-color: $secondary-text;
//                                 border-radius: 50%;
//                             }
//                             p{
//                                 margin-left: 4px;
//                                 font-size: 22px;
//                                 font-weight: 700;
//                             }
//                         }
//                     }
//                 }
                
                    
//             }
//             .description{
//                 background-color: $secondary-color;
//                 border-radius: 20px;
//                 margin: 10px 0;
//                 padding: 10px;
//                 .section21{
//                     display: flex;
//                     flex-direction: row;
//                     color: $text-color;
//                     p{
//                         font-size: 14px;
//                         margin:5px 5px 5px 0 ;
//                     }
                    
//                 }
//                 .section22{
//                     .section221{
//                         font-weight: 700;
//                         font-size: 26px;
//                     }
//                     p{
//                         font-size: 22px;
//                     }
//                 }
//             }
//             .commentSection{
//                 display: flex;
//                 flex-direction: row;
//                 padding:10px 10px;
//                 .commentSection1{
//                     margin-right: 10px;
//                     p{
//                         font-size: 20px;
//                         font-weight: 700;
//                     }
//                 }
//                 .commentSection2{
//                     margin-left: 20px;
//                     width: 9%;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: space-between;
//                     align-items: center;
//                 }
//             }
//             .comments{
//                 .comments1{
//                     .comments11{
//                         display: flex;
//                         flex-direction: row;
//                         align-items: center;
//                         width: 100%;
//                         justify-content: space-between;
//                         padding:10px 10px;

//                         img{
//                             width: 45px;
//                             height: 45px;
//                             border-radius: 50%;
//                         }
//                         input{
//                             height: 30px;
//                             width: 60%;
//                             color: black;
//                         }
//                     }
//                     .divider{
//                         width: 100%;
//                         height: 1px;
//                         background-color: white;
//                         margin: 20px 0;
//                     }
//                 }
//             }
//             .channelComments{
//                 display: flex;
//                 flex-direction: column;
//                 padding: 10px 10px;
//                 width: 100%;
//                 .channelCommentsSection{
//                     display: flex;
//                     flex-direction: row;
//                     padding: 10px 0;
//                     width:100% ;
//                     align-items: center;
//                     height: auto;
//                     overflow-wrap: break-word;

//                     .channelCommentsSection1{
//                         img{
//                             width: 45px;
//                             height: 45px;
//                             border-radius: 50%;
//                             margin: 0 20px 0 0;
//                         }
//                     }
//                     .channelCommentsSection2{
//                         width: 100%;
//                         .channelCommentsSection21{
//                             display: flex;
//                             align-items: center;
//                             .channelCommentsSection211{
//                                 margin: 0 20px 0 0;
                                
//                             }
//                             .channelCommentsSection212{
//                                 color: $secondary-text;
//                             }
//                             .channelCommentsSection213{
//                                 margin-left: 2rem;
//                             }
//                             .commentDropdown{
//                                 position: absolute;
//                                 display: flex;
//                                 flex-direction: column;
//                                 margin-left: 300px;
//                                 button{
//                                     font-size: 10px;
//                                 }
//                             }
//                         }
//                         &2{
//                             height: auto;
//                             width: 100%;
//                             &1{
//                                 width: 100%;
//                                 word-break: break-word; /* Ensure long words break and wrap */
//                                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                                 white-space: normal;
//                             }
//                         }
//                         .channelCommensSection23{
//                             display: flex;
//                             flex-direction: row;
//                             justify-content: space-between;
//                             width: 30px;
//                             align-items: center;
//                             .channelCommensSection231{
//                                 // color: red;
//                                 .likeIcon{
//                                     color: red;
//                                 }
//                                 .unLikeIcon{
//                                     color:white;
//                                 }
//                             }
                            
//                             p{
//                                 color: $secondary-text;
//                             }
//                         }
//                     }
//                 }
//             }
            

//             video {
//                 width: 100%;
//                 border-radius: 20px;
//                 height: 35vw;
//                 // pointer-events: none;
//             }
    
//             button {
//                 margin-top: 10px;
//                 padding: 10px 20px;
//                 background-color: #4a4a4a;
//                 color: white;
//                 border: none;
//                 border-radius: 5px;
//                 cursor: pointer;
    
//                 &:hover {
//                     background-color: #6a6a6a;
//                 }
//             }
    
//             .video-title {
//                 width: 100%;
//                 color: white;
//                 font-weight: bold;
//                 font-size: 1.3rem;
//                 margin-top: 10px;
//             }
//         }
    
//         .watchVideo-right-side {
//             width: 30%;
//             display: flex;
//             flex-direction: column;
//             margin-right: 5px;
//             color: $text-color;
//             font-size: $base-font-size;
//             background-color: $background-color;
//             height: auto;
//             align-items: center;
//             .watchVideoSection{
//                 width: 50vh;
//                 display: flex;
//                 flex-direction: row;
//                 justify-content: space-between;
//                 padding: 5px;
//                 transition-duration: 0.5s;
//                 border-radius: 10px;

//                 &:hover{
//                     transform: scale(0.98);
//                     background-color: $hover-bg-color;
//                     box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                 }
//                 .watchVideoSection1{
//                     width: 45%;
//                     height: 15vh;
//                     display: flex;
//                     align-items: center;
//                     .watchVideoSection11{
//                         margin: 0 6px 0 0 ;
//                         width: 100%;
//                         height: 100%;
//                         border-radius: 5px;
//                         // object-fit:cover;
//                     }
//                 }
//                 .watchVideoSection2{
//                     width: 50%;
//                     .watchVideoSection21{
//                         .watchVideoSection211{
//                             font-size: 14px;
//                             font-weight: 700;
//                         }
//                     }
//                     .watchVideoSection22{
//                         margin-top: 5px;
//                         .watchVideoSection221{
//                             font-size: 13px;
//                             color: $secondary-text;
//                         }
//                     }
//                     .watchVideoSection23{
//                         display: flex;
//                         flex-direction: row;
//                         font-size: 12px;
//                         color: $secondary-text;
//                         .views{
//                             font-size: 12px;
//                         }
//                         .dot{
//                             font-size: 12px;
//                         }
//                         .time{
//                             font-size: 12px;
//                         }
//                     }
//                 }
//             }
//         }
    
//     }

// .editCommentContainer{
//     position: fixed;
//     left: 0;
//     top:0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: rgba(0, 0, 0, 0.571);
    
    
//     .editCommentContainer1{
//         width: 35%;
//         height: 25%;
//         background-color: black;
//         padding: 10px;
//         display: flex;
//         align-items: center;
//         flex-direction: column;
//         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//         transition: 0.4s;
//         border-radius: 10px;

//         &:hover{
//             transform: scale(0.98);
//         }
//         .editCommentContainer11{
//             font-size: 20px;
//             font-weight: 700;
//             margin-bottom: 10px;
//         }
//         .editCommentContainer12{
//             width: 100%;
//             display: flex;
//             flex-direction: column;
//             .editCommentContainer121{
//                 font-size: 16px;
//                 font-weight: 600;
//             }
//             .editCommentContainer122{
//                 color: black;
//                 border-radius: 5px;
//                 border: 2px solid black;
//                 margin-bottom: 10px;
//                 &:focus{
//                     outline: none;
//                     border-color: red;
//                 }
//             }
//         }

//         .formButtons{
//             width: 50%;
//             display: flex;
//             justify-content: center;

//             &1,&2{
//                 background-color: red;
//                 margin: 5px;
//                 padding: 5px;
//                 border-radius: 5px;

//                 &:hover{
//                     background-color: rgba(255, 0, 0, 0.649);
//                 }
//             }
//         }
//     }

// }


// @media(max-width:1280px){
//     .box{
//         padding:0vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             // position: fixed;
//             // height: 56px;
//             // width: 100vw;
//             // background-color:$background-color;
//             // z-index: 100;
//         }
//             // .displayer{
//             //     width: 100%;
//             //     background-color: aqua;
//             // }
//             // .left-side2{
//             //     position: fixed;
//             //     margin-top: 4%;
            
//             //     height: 100vh;
//             //     color: white;
//             //     background-color:$background-color;
//             //     z-index: 2;
//             // }
//             // .left-side {
//             //     position: fixed;
//             //     margin-top: 4%;
//             //     width: 15%;
//             //     height: 100vh;
//             //     color: white;
//             //     background-color:$background-color;
//             //     z-index: 2;
//             // }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 // margin-top:4%;
                
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             // // margin: 20px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 45vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     // background-color: #4a4a4a;
//                     // color: white;
//                     // border: none;
//                     // border-radius: 5px;
//                     // cursor: pointer;
        
//                     // &:hover {
//                     //     background-color: #6a6a6a;
//                     // }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     // color: white;
//                     // font-weight: bold;
//                     // font-size: 1.3rem;
//                     // margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 0;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 // color: $text-color;
//                 // font-size: $base-font-size;
//                 // background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 80vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
    
//                     // &:hover{
//                     //     transform: scale(0.98);
//                     //     background-color: $hover-bg-color;
//                     //     box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     // }
//                     .watchVideoSection1{
//                         width: 30%;
//                         height: 15vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 60%;
//                         .watchVideoSection21{
//                             // .watchVideoSection211{
//                             //     font-size: 26px;
//                             //     font-weight: 700;
//                             // }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             // .watchVideoSection221{
//                             //     font-size: 18px;
//                             //     color: $secondary-text;
//                             // }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             // color: $secondary-text;
//                             .views{
//                                 font-size: 14px;
//                             }
//                             .dot{
//                                 font-size: 14px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 14px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     // .editCommentContainer{
//     //     position: fixed;
//     //     left: 0;
//     //     top:0;
//     //     width: 100%;
//     //     height: 100%;
//     //     display: flex;
//     //     align-items: center;
//     //     justify-content: center;
//     //     background-color: rgba(0, 0, 0, 0.571);
        
        
//     //     .editCommentContainer1{
//     //         width: 35%;
//     //         height: 20%;
//     //         background-color: black;
//     //         padding: 10px;
//     //         display: flex;
//     //         align-items: center;
//     //         flex-direction: column;
//     //         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//     //         transition: 0.4s;
//     //         border-radius: 10px;
    
//     //         &:hover{
//     //             transform: scale(0.98);
//     //         }
//     //         .editCommentContainer11{
//     //             font-size: 20px;
//     //             font-weight: 700;
//     //             margin-bottom: 10px;
//     //         }
//     //         .editCommentContainer12{
//     //             width: 100%;
//     //             display: flex;
//     //             flex-direction: column;
//     //             .editCommentContainer121{
//     //                 font-size: 16px;
//     //                 font-weight: 600;
//     //             }
//     //             .editCommentContainer122{
//     //                 color: black;
//     //                 border-radius: 5px;
//     //                 border: 2px solid black;
//     //                 margin-bottom: 10px;
//     //                 &:focus{
//     //                     outline: none;
//     //                     border-color: red;
//     //                 }
//     //             }
//     //         }
    
//     //         .formButtons{
//     //             width: 50%;
//     //             display: flex;
//     //             justify-content: center;
    
//     //             &1,&2{
//     //                 background-color: red;
//     //                 margin: 5px;
//     //                 padding: 5px;
//     //                 border-radius: 5px;
    
//     //                 &:hover{
//     //                     background-color: rgba(255, 0, 0, 0.649);
//     //                 }
//     //             }
//     //         }
//     //     }
    
//     // }
// }

// @media(max-width:1024px){
//     video {
//         width: 100%;
//         border-radius: 20px;
//         height: 55vw;
//         // pointer-events: none;
//     }
// }

// @media(max-width:767px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 40px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 55vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 100px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 80vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
    
//                     &:hover{
//                         transform: scale(0.98);
//                         background-color: $hover-bg-color;
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 30%;
//                         height: 15vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 60%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 22px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 16px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 14px;
//                             }
//                             .dot{
//                                 font-size: 14px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 14px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         // position: fixed;
//         // left: 0;
//         // top:0;
//         // width: 100%;
//         // height: 100%;
//         // display: flex;
//         // align-items: center;
//         // justify-content: center;
//         // background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 45%;
//             height: 18%;
//             // background-color: black;
//             // padding: 10px;
//             // display: flex;
//             // align-items: center;
//             // flex-direction: column;
//             // box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             // transition: 0.4s;
//             // border-radius: 10px;
    
//             // &:hover{
//             //     transform: scale(0.98);
//             // }
//             // .editCommentContainer11{
//             //     font-size: 20px;
//             //     font-weight: 700;
//             //     margin-bottom: 10px;
//             // }
//             // .editCommentContainer12{
//             //     width: 100%;
//             //     display: flex;
//             //     flex-direction: column;
//             //     .editCommentContainer121{
//             //         font-size: 16px;
//             //         font-weight: 600;
//             //     }
//             //     .editCommentContainer122{
//             //         color: black;
//             //         border-radius: 5px;
//             //         border: 2px solid black;
//             //         margin-bottom: 10px;
//             //         &:focus{
//             //             outline: none;
//             //             border-color: red;
//             //         }
//             //     }
//             // }
    
//             // .formButtons{
//             //     width: 50%;
//             //     display: flex;
//             //     justify-content: center;
    
//             //     &1,&2{
//             //         background-color: red;
//             //         margin: 5px;
//             //         padding: 5px;
//             //         border-radius: 5px;
    
//             //         &:hover{
//             //             background-color: rgba(255, 0, 0, 0.649);
//             //         }
//             //     }
//             // }
//         }
    
//     }
// }

// @media(max-width:600px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 10px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 55vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 10px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 gap: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 95vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;
//                     border: 2px solid rgb(45, 45, 45);

//                     // gap: 2px;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
//                     background-color: $hover-bg-color;

//                     &:hover{
//                         transform: scale(1);
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 50%;
//                         height: 25vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 50%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 18px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 14px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 12px;
//                             }
//                             .dot{
//                                 font-size: 12px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 12px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         position: fixed;
//         left: 0;
//         top:0;
//         width: 100%;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 65%;
//             height: 25%;
//             background-color: black;
//             padding: 10px;
//             display: flex;
//             align-items: center;
//             flex-direction: column;
//             box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             transition: 0.4s;
//             border-radius: 10px;
    
//             &:hover{
//                 transform: scale(0.98);
//             }
//             .editCommentContainer11{
//                 font-size: 20px;
//                 font-weight: 700;
//                 margin-bottom: 10px;
//             }
//             .editCommentContainer12{
//                 width: 100%;
//                 display: flex;
//                 flex-direction: column;
//                 .editCommentContainer121{
//                     font-size: 16px;
//                     font-weight: 600;
//                 }
//                 .editCommentContainer122{
//                     color: black;
//                     border-radius: 5px;
//                     border: 2px solid black;
//                     margin-bottom: 10px;
//                     &:focus{
//                         outline: none;
//                         border-color: red;
//                     }
//                 }
//             }
    
//             .formButtons{
//                 width: 50%;
//                 display: flex;
//                 justify-content: center;
    
//                 &1,&2{
//                     background-color: red;
//                     margin: 5px;
//                     padding: 5px;
//                     border-radius: 5px;
    
//                     &:hover{
//                         background-color: rgba(255, 0, 0, 0.649);
//                     }
//                 }
//             }
//         }
    
//     }
// }

// @media(max-width:500px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 10px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 flex-direction: column;
//                 padding-right: 20px;
//                 .subscribeSection{
//                     display: flex;
//                     justify-content: space-between;
//                     padding: 3px;
//                     width: 100%;
    
//                     .section1{
//                         width: 100%;
//                         display: flex;
//                         justify-content: space-between;
//                         flex-direction: row;
//                         align-items: center;
    
//                         .section11{
//                             display: flex;
//                             align-items: center;
    
//                             .section111{
//                                 img{
//                                     width: 45px;
//                                     height: 45px;
//                                     border-radius: 50%;
//                                 }
//                                 margin-right: 4px;
//                             }
    
//                             .section112{
//                                 .ownerName{
//                                     font-size: $base-font-size;
//                                     font-weight: 700;
//                                 }
//                                 .ownerSubscribers{
//                                     font-size: 12px;
//                                     color: $secondary-text;
//                                 }
                                
//                             }
//                         }
//                         .section12{
//                             display: flex;
//                             width: 50%;
//                             justify-content: space-around;
//                             align-items: center;
//                             padding: 3px 3px;
//                             .subscribeButton{
//                                 background-color: $button-color;
//                             }
//                             .likeButton{
//                                 color: $background-color;
//                                 background-color: $secondary-text;
//                                 height: 40px;
//                                 width: 70px;
//                                 border-radius: 20px;
//                                 display: flex;
//                                 align-items: center;
//                                 justify-content: center;
//                                 cursor: pointer;
//                                 .likeIcon{
//                                     font-size:30px;
//                                     background-color: $secondary-text;
//                                     color: $button-color;
//                                     border-radius: 50%;
//                                 }
//                                 .unLikeIcon{
//                                     font-size:30px;
//                                     background-color: $secondary-text;
//                                     border-radius: 50%;
//                                 }
//                                 p{
//                                     margin-left: 4px;
//                                     font-size: 22px;
//                                     font-weight: 700;
//                                 }
//                             }
//                         }
//                     }
                    
                        
//                 }
//                 .description{
//                     background-color: $secondary-color;
//                     border-radius: 20px;
//                     margin: 10px 0;
//                     padding: 10px;
//                     .section21{
//                         display: flex;
//                         flex-direction: row;
//                         color: $text-color;
//                         p{
//                             font-size: 14px;
//                             margin:5px 5px 5px 0 ;
//                         }
                        
//                     }
//                     .section22{
//                         .section221{
//                             font-weight: 700;
//                             font-size: 26px;
//                         }
//                         p{
//                             font-size: 18px;
//                         }
//                     }
//                 }
//                 .commentSection{
//                     display: flex;
//                     flex-direction: row;
//                     padding:10px 10px;
//                     .commentSection1{
//                         margin-right: 10px;
//                         p{
//                             font-size: 20px;
//                             font-weight: 700;
//                         }
//                     }
//                     .commentSection2{
//                         margin-left: 20px;
//                         width: 20%;
//                         display: flex;
//                         flex-direction: row;
//                         justify-content: space-between;
//                         align-items: center;
//                     }
//                 }
//                 .comments{
//                     .comments1{
                        

//                         .comments11{
//                             display: flex;
//                             flex-direction: row;
//                             align-items: center;
//                             width: 100%;
//                             justify-content: space-between;
//                             padding:10px 10px;
    
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                             }
//                             input{
//                                 height: 35px;
//                                 width: 40%;
//                                 color: black;
//                             }
//                         }
//                         .divider{
//                             width: 100%;
//                             height: 1px;
//                             background-color: white;
//                             margin: 20px 0;
//                         }
//                     }
//                 }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     .channelCommentsSection{
//                         display: flex;
//                         flex-direction: row;
//                         padding: 10px 0;
//                         width:100% ;
//                         align-items: center;
//                         height: auto;
//                         overflow-wrap: break-word;
    
//                         .channelCommentsSection1{
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                                 margin: 0 20px 0 0;
//                             }
//                         }
//                         .channelCommentsSection2{
//                             width: 100%;
//                             .channelCommentsSection21{
//                                 display: flex;
//                                 align-items: center;
//                                 .channelCommentsSection211{
//                                     margin: 0 20px 0 0;
                                    
//                                 }
//                                 .channelCommentsSection212{
//                                     color: $secondary-text;
//                                 }
//                                 .channelCommentsSection213{
//                                     margin-left: 2rem;
//                                 }
//                                 .commentDropdown{
//                                     position: absolute;
//                                     display: flex;
//                                     flex-direction: column;
//                                     margin-left: 300px;
//                                     button{
//                                         font-size: 10px;
//                                     }
//                                 }
//                             }
//                             &2{
//                                 height: auto;
//                                 width: 100%;
//                                 &1{
//                                     width: 100%;
//                                     word-break: break-word; /* Ensure long words break and wrap */
//                                     overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                                     white-space: normal;
//                                 }
//                             }
//                             .channelCommensSection23{
//                                 display: flex;
//                                 flex-direction: row;
//                                 justify-content: space-between;
//                                 width: 30px;
//                                 align-items: center;
//                                 .channelCommensSection231{
//                                     // color: red;
//                                     .likeIcon{
//                                         color: red;
//                                     }
//                                     .unLikeIcon{
//                                         color:white;
//                                     }
//                                 }
                                
//                                 p{
//                                     color: $secondary-text;
//                                 }
//                             }
//                         }
//                     }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 53vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 9px 15px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 // height: 60vw;
//                 padding: 20px 15px 20vw 0px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 0px;
//                 gap: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 98vw;
//                     height: 75vw;
//                     display: flex;
//                     flex-direction: column;
//                     justify-content: flex-start;
//                     border: 2px solid rgb(45, 45, 45);

//                     // gap: 2px;

//                     padding-right: 0px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
//                     background-color: $hover-bg-color;

//                     &:hover{
//                         transform: scale(1);
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 100%;
//                         height: 47vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 0px;
//                         .watchVideoSection11{
//                             margin: 0 0px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 100%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 18px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 14px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 12px;
//                             }
//                             .dot{
//                                 font-size: 12px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 12px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         position: fixed;
//         left: 0;
//         top:0;
//         width: 100%;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 75%;
//             height: 20%;
//             background-color: black;
//             padding: 10px;
//             display: flex;
//             align-items: center;
//             flex-direction: column;
//             box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             transition: 0.4s;
//             border-radius: 10px;
    
//             &:hover{
//                 transform: scale(0.98);
//             }
//             .editCommentContainer11{
//                 font-size: 20px;
//                 font-weight: 700;
//                 margin-bottom: 10px;
//             }
//             .editCommentContainer12{
//                 width: 100%;
//                 display: flex;
//                 flex-direction: column;
//                 .editCommentContainer121{
//                     font-size: 16px;
//                     font-weight: 600;
//                 }
//                 .editCommentContainer122{
//                     color: black;
//                     border-radius: 5px;
//                     border: 2px solid black;
//                     margin-bottom: 10px;
//                     &:focus{
//                         outline: none;
//                         border-color: red;
//                     }
//                 }
//             }
    
//             .formButtons{
//                 width: 50%;
//                 display: flex;
//                 justify-content: center;
    
//                 &1,&2{
//                     background-color: red;
//                     margin: 5px;
//                     padding: 5px;
//                     border-radius: 5px;
    
//                     &:hover{
//                         background-color: rgba(255, 0, 0, 0.649);
//                     }
//                 }
//             }
//         }
    
//     }
// }


// // @media(max-width:360px){
    
// // }


// // *{
// //     background-color:#0f0f0f;
// // }

// // body{
// //     background-color:#0f0f0f;
// // }
// @import '../../index.scss';

// .box{
//     padding:0vw;
//     width: 99%;
//     height: auto;
//     .SearchBar{
//         position: fixed;
//         height: 56px;
//         width: 100vw;
//         background-color:$background-color;
//         z-index: 100;
//     }
//         .displayer{
//             width: 100%;
//             background-color: aqua;
//         }
//         .left-side2{
//             position: fixed;
//             margin-top: 4%;
        
//             height: 100vh;
//             color: white;
//             background-color:$background-color;
//             z-index: 2;
//         }
//         .left-side {
//             position: fixed;
//             margin-top: 4%;
//             width: 15%;
//             height: 100vh;
//             color: white;
//             background-color:$background-color;
//             z-index: 2;
//         }
//         .right-side-WithNav {
//             // width: 100%;
//             // height: auto;
//             // display: flex;
//             // flex-direction: column;
//             // background-color:$background-color;
            
//         }
//         .right-side-WithoutNav{
//             margin-top:4%;
            
//             width: 100%;
//             height: auto;
//             display: flex;
//             flex-direction: column;
//             background-color:$background-color;
            
//         }
//     }
    
    
//     .watchVideo-container {
//         background-color: $background-color;
//         display: flex;
//         justify-content: space-between;
//         // margin: 20px;
//         margin-top: 5px;
//         height: auto;
    
//         width: 100%;
//         height: 100vh;
    
//         .watchVideo-left-side {
//             width: 68%;
//             height: auto;
//             display: flex;
        
//             flex-direction: column;
//             padding-right: 20px;
//             .subscribeSection{
//                 display: flex;
//                 justify-content: space-between;
//                 padding: 3px;
//                 width: 100%;

//                 .section1{
//                     width: 70%;
//                     display: flex;
//                     justify-content: space-between;
//                     flex-direction: row;
//                     align-items: center;

//                     .section11{
//                         display: flex;
//                         align-items: center;

//                         .section111{
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                             }
//                             margin-right: 4px;
//                         }

//                         .section112{
//                             .ownerName{
//                                 font-size: $base-font-size;
//                                 font-weight: 700;
//                             }
//                             .ownerSubscribers{
//                                 font-size: 12px;
//                                 color: $secondary-text;
//                             }
                            
//                         }
//                     }
//                     .section12{
//                         display: flex;
//                         width: 50%;
//                         justify-content: space-around;
//                         align-items: center;
//                         padding: 3px 3px;
//                         .subscribeButton{
//                             background-color: $button-color;
//                         }
//                         .likeButton{
//                             color: $background-color;
//                             background-color: $secondary-text;
//                             height: 40px;
//                             width: 80px;
//                             border-radius: 20px;
//                             display: flex;
//                             align-items: center;
//                             justify-content: center;
//                             cursor: pointer;
//                             .likeIcon{
//                                 font-size:30px;
//                                 background-color: $secondary-text;
//                                 color: $button-color;
//                                 border-radius: 50%;
//                             }
//                             .unLikeIcon{
//                                 font-size:30px;
//                                 background-color: $secondary-text;
//                                 border-radius: 50%;
//                             }
//                             p{
//                                 margin-left: 4px;
//                                 font-size: 22px;
//                                 font-weight: 700;
//                             }
//                         }
//                     }
//                 }
                
                    
//             }
//             .description{
//                 background-color: $secondary-color;
//                 border-radius: 20px;
//                 margin: 10px 0;
//                 padding: 10px;
//                 .section21{
//                     display: flex;
//                     flex-direction: row;
//                     color: $text-color;
//                     p{
//                         font-size: 14px;
//                         margin:5px 5px 5px 0 ;
//                     }
                    
//                 }
//                 .section22{
//                     .section221{
//                         font-weight: 700;
//                         font-size: 26px;
//                     }
//                     p{
//                         font-size: 22px;
//                     }
//                 }
//             }
//             .commentSection{
//                 display: flex;
//                 flex-direction: row;
//                 padding:10px 10px;
//                 .commentSection1{
//                     margin-right: 10px;
//                     p{
//                         font-size: 20px;
//                         font-weight: 700;
//                     }
//                 }
//                 .commentSection2{
//                     margin-left: 20px;
//                     width: 9%;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: space-between;
//                     align-items: center;
//                 }
//             }
//             .comments{
//                 .comments1{
//                     .comments11{
//                         display: flex;
//                         flex-direction: row;
//                         align-items: center;
//                         width: 100%;
//                         justify-content: space-between;
//                         padding:10px 10px;

//                         img{
//                             width: 45px;
//                             height: 45px;
//                             border-radius: 50%;
//                         }
//                         input{
//                             height: 30px;
//                             width: 60%;
//                             color: black;
//                         }
//                     }
//                     .divider{
//                         width: 100%;
//                         height: 1px;
//                         background-color: white;
//                         margin: 20px 0;
//                     }
//                 }
//             }
//             .channelComments{
//                 display: flex;
//                 flex-direction: column;
//                 padding: 10px 10px;
//                 width: 100%;
//                 .channelCommentsSection{
//                     display: flex;
//                     flex-direction: row;
//                     padding: 10px 0;
//                     width:100% ;
//                     align-items: center;
//                     height: auto;
//                     overflow-wrap: break-word;

//                     .channelCommentsSection1{
//                         img{
//                             width: 45px;
//                             height: 45px;
//                             border-radius: 50%;
//                             margin: 0 20px 0 0;
//                         }
//                     }
//                     .channelCommentsSection2{
//                         width: 100%;
//                         .channelCommentsSection21{
//                             display: flex;
//                             align-items: center;
//                             .channelCommentsSection211{
//                                 margin: 0 20px 0 0;
                                
//                             }
//                             .channelCommentsSection212{
//                                 color: $secondary-text;
//                             }
//                             .channelCommentsSection213{
//                                 margin-left: 2rem;
//                             }
//                             .commentDropdown{
//                                 position: absolute;
//                                 display: flex;
//                                 flex-direction: column;
//                                 margin-left: 300px;
//                                 button{
//                                     font-size: 10px;
//                                 }
//                             }
//                         }
//                         &2{
//                             height: auto;
//                             width: 100%;
//                             &1{
//                                 width: 100%;
//                                 word-break: break-word; /* Ensure long words break and wrap */
//                                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                                 white-space: normal;
//                             }
//                         }
//                         .channelCommensSection23{
//                             display: flex;
//                             flex-direction: row;
//                             justify-content: space-between;
//                             width: 30px;
//                             align-items: center;
//                             .channelCommensSection231{
//                                 // color: red;
//                                 .likeIcon{
//                                     color: red;
//                                 }
//                                 .unLikeIcon{
//                                     color:white;
//                                 }
//                             }
                            
//                             p{
//                                 color: $secondary-text;
//                             }
//                         }
//                     }
//                 }
//             }
            

//             video {
//                 width: 100%;
//                 border-radius: 20px;
//                 height: 35vw;
//                 // pointer-events: none;
//             }
    
//             button {
//                 margin-top: 10px;
//                 padding: 10px 20px;
//                 background-color: #4a4a4a;
//                 color: white;
//                 border: none;
//                 border-radius: 5px;
//                 cursor: pointer;
    
//                 &:hover {
//                     background-color: #6a6a6a;
//                 }
//             }
    
//             .video-title {
//                 width: 100%;
//                 color: white;
//                 font-weight: bold;
//                 font-size: 1.3rem;
//                 margin-top: 10px;
//             }
//         }
    
//         .watchVideo-right-side {
//             width: 30%;
//             display: flex;
//             flex-direction: column;
//             margin-right: 5px;
//             color: $text-color;
//             font-size: $base-font-size;
//             background-color: $background-color;
//             height: auto;
//             align-items: center;
//             .watchVideoSection{
//                 width: 50vh;
//                 display: flex;
//                 flex-direction: row;
//                 justify-content: space-between;
//                 padding: 5px;
//                 transition-duration: 0.5s;
//                 border-radius: 10px;

//                 &:hover{
//                     transform: scale(0.98);
//                     background-color: $hover-bg-color;
//                     box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                 }
//                 .watchVideoSection1{
//                     width: 45%;
//                     height: 15vh;
//                     display: flex;
//                     align-items: center;
//                     .watchVideoSection11{
//                         margin: 0 6px 0 0 ;
//                         width: 100%;
//                         height: 100%;
//                         border-radius: 5px;
//                         // object-fit:cover;
//                     }
//                 }
//                 .watchVideoSection2{
//                     width: 50%;
//                     .watchVideoSection21{
//                         .watchVideoSection211{
//                             font-size: 14px;
//                             font-weight: 700;
//                         }
//                     }
//                     .watchVideoSection22{
//                         margin-top: 5px;
//                         .watchVideoSection221{
//                             font-size: 13px;
//                             color: $secondary-text;
//                         }
//                     }
//                     .watchVideoSection23{
//                         display: flex;
//                         flex-direction: row;
//                         font-size: 12px;
//                         color: $secondary-text;
//                         .views{
//                             font-size: 12px;
//                         }
//                         .dot{
//                             font-size: 12px;
//                         }
//                         .time{
//                             font-size: 12px;
//                         }
//                     }
//                 }
//             }
//         }
    
//     }

// .editCommentContainer{
//     position: fixed;
//     left: 0;
//     top:0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: rgba(0, 0, 0, 0.571);
    
    
//     .editCommentContainer1{
//         width: 35%;
//         height: 25%;
//         background-color: black;
//         padding: 10px;
//         display: flex;
//         align-items: center;
//         flex-direction: column;
//         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//         transition: 0.4s;
//         border-radius: 10px;

//         &:hover{
//             transform: scale(0.98);
//         }
//         .editCommentContainer11{
//             font-size: 20px;
//             font-weight: 700;
//             margin-bottom: 10px;
//         }
//         .editCommentContainer12{
//             width: 100%;
//             display: flex;
//             flex-direction: column;
//             .editCommentContainer121{
//                 font-size: 16px;
//                 font-weight: 600;
//             }
//             .editCommentContainer122{
//                 color: black;
//                 border-radius: 5px;
//                 border: 2px solid black;
//                 margin-bottom: 10px;
//                 &:focus{
//                     outline: none;
//                     border-color: red;
//                 }
//             }
//         }

//         .formButtons{
//             width: 50%;
//             display: flex;
//             justify-content: center;

//             &1,&2{
//                 background-color: red;
//                 margin: 5px;
//                 padding: 5px;
//                 border-radius: 5px;

//                 &:hover{
//                     background-color: rgba(255, 0, 0, 0.649);
//                 }
//             }
//         }
//     }

// }


// @media(max-width:1280px){
//     .box{
//         padding:0vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             // position: fixed;
//             // height: 56px;
//             // width: 100vw;
//             // background-color:$background-color;
//             // z-index: 100;
//         }
//             // .displayer{
//             //     width: 100%;
//             //     background-color: aqua;
//             // }
//             // .left-side2{
//             //     position: fixed;
//             //     margin-top: 4%;
            
//             //     height: 100vh;
//             //     color: white;
//             //     background-color:$background-color;
//             //     z-index: 2;
//             // }
//             // .left-side {
//             //     position: fixed;
//             //     margin-top: 4%;
//             //     width: 15%;
//             //     height: 100vh;
//             //     color: white;
//             //     background-color:$background-color;
//             //     z-index: 2;
//             // }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 // margin-top:4%;
                
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             // // margin: 20px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 45vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     // background-color: #4a4a4a;
//                     // color: white;
//                     // border: none;
//                     // border-radius: 5px;
//                     // cursor: pointer;
        
//                     // &:hover {
//                     //     background-color: #6a6a6a;
//                     // }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     // color: white;
//                     // font-weight: bold;
//                     // font-size: 1.3rem;
//                     // margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 0;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 // color: $text-color;
//                 // font-size: $base-font-size;
//                 // background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 80vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
    
//                     // &:hover{
//                     //     transform: scale(0.98);
//                     //     background-color: $hover-bg-color;
//                     //     box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     // }
//                     .watchVideoSection1{
//                         width: 30%;
//                         height: 15vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 60%;
//                         .watchVideoSection21{
//                             // .watchVideoSection211{
//                             //     font-size: 26px;
//                             //     font-weight: 700;
//                             // }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             // .watchVideoSection221{
//                             //     font-size: 18px;
//                             //     color: $secondary-text;
//                             // }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             // color: $secondary-text;
//                             .views{
//                                 font-size: 14px;
//                             }
//                             .dot{
//                                 font-size: 14px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 14px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     // .editCommentContainer{
//     //     position: fixed;
//     //     left: 0;
//     //     top:0;
//     //     width: 100%;
//     //     height: 100%;
//     //     display: flex;
//     //     align-items: center;
//     //     justify-content: center;
//     //     background-color: rgba(0, 0, 0, 0.571);
        
        
//     //     .editCommentContainer1{
//     //         width: 35%;
//     //         height: 20%;
//     //         background-color: black;
//     //         padding: 10px;
//     //         display: flex;
//     //         align-items: center;
//     //         flex-direction: column;
//     //         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//     //         transition: 0.4s;
//     //         border-radius: 10px;
    
//     //         &:hover{
//     //             transform: scale(0.98);
//     //         }
//     //         .editCommentContainer11{
//     //             font-size: 20px;
//     //             font-weight: 700;
//     //             margin-bottom: 10px;
//     //         }
//     //         .editCommentContainer12{
//     //             width: 100%;
//     //             display: flex;
//     //             flex-direction: column;
//     //             .editCommentContainer121{
//     //                 font-size: 16px;
//     //                 font-weight: 600;
//     //             }
//     //             .editCommentContainer122{
//     //                 color: black;
//     //                 border-radius: 5px;
//     //                 border: 2px solid black;
//     //                 margin-bottom: 10px;
//     //                 &:focus{
//     //                     outline: none;
//     //                     border-color: red;
//     //                 }
//     //             }
//     //         }
    
//     //         .formButtons{
//     //             width: 50%;
//     //             display: flex;
//     //             justify-content: center;
    
//     //             &1,&2{
//     //                 background-color: red;
//     //                 margin: 5px;
//     //                 padding: 5px;
//     //                 border-radius: 5px;
    
//     //                 &:hover{
//     //                     background-color: rgba(255, 0, 0, 0.649);
//     //                 }
//     //             }
//     //         }
//     //     }
    
//     // }
// }

// @media(max-width:1024px){
//     video {
//         width: 100%;
//         border-radius: 20px;
//         height: 55vw;
//         // pointer-events: none;
//     }
// }

// @media(max-width:767px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 40px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 55vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 100px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 80vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
    
//                     &:hover{
//                         transform: scale(0.98);
//                         background-color: $hover-bg-color;
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 30%;
//                         height: 15vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 60%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 22px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 16px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 14px;
//                             }
//                             .dot{
//                                 font-size: 14px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 14px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         // position: fixed;
//         // left: 0;
//         // top:0;
//         // width: 100%;
//         // height: 100%;
//         // display: flex;
//         // align-items: center;
//         // justify-content: center;
//         // background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 45%;
//             height: 18%;
//             // background-color: black;
//             // padding: 10px;
//             // display: flex;
//             // align-items: center;
//             // flex-direction: column;
//             // box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             // transition: 0.4s;
//             // border-radius: 10px;
    
//             // &:hover{
//             //     transform: scale(0.98);
//             // }
//             // .editCommentContainer11{
//             //     font-size: 20px;
//             //     font-weight: 700;
//             //     margin-bottom: 10px;
//             // }
//             // .editCommentContainer12{
//             //     width: 100%;
//             //     display: flex;
//             //     flex-direction: column;
//             //     .editCommentContainer121{
//             //         font-size: 16px;
//             //         font-weight: 600;
//             //     }
//             //     .editCommentContainer122{
//             //         color: black;
//             //         border-radius: 5px;
//             //         border: 2px solid black;
//             //         margin-bottom: 10px;
//             //         &:focus{
//             //             outline: none;
//             //             border-color: red;
//             //         }
//             //     }
//             // }
    
//             // .formButtons{
//             //     width: 50%;
//             //     display: flex;
//             //     justify-content: center;
    
//             //     &1,&2{
//             //         background-color: red;
//             //         margin: 5px;
//             //         padding: 5px;
//             //         border-radius: 5px;
    
//             //         &:hover{
//             //             background-color: rgba(255, 0, 0, 0.649);
//             //         }
//             //     }
//             // }
//         }
    
//     }
// }

// @media(max-width:600px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 10px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 55vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 10px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 gap: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 95vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;
//                     border: 2px solid rgb(45, 45, 45);

//                     // gap: 2px;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
//                     background-color: $hover-bg-color;

//                     &:hover{
//                         transform: scale(1);
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 50%;
//                         height: 25vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 50%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 18px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 14px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 12px;
//                             }
//                             .dot{
//                                 font-size: 12px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 12px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         position: fixed;
//         left: 0;
//         top:0;
//         width: 100%;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 65%;
//             height: 25%;
//             background-color: black;
//             padding: 10px;
//             display: flex;
//             align-items: center;
//             flex-direction: column;
//             box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             transition: 0.4s;
//             border-radius: 10px;
    
//             &:hover{
//                 transform: scale(0.98);
//             }
//             .editCommentContainer11{
//                 font-size: 20px;
//                 font-weight: 700;
//                 margin-bottom: 10px;
//             }
//             .editCommentContainer12{
//                 width: 100%;
//                 display: flex;
//                 flex-direction: column;
//                 .editCommentContainer121{
//                     font-size: 16px;
//                     font-weight: 600;
//                 }
//                 .editCommentContainer122{
//                     color: black;
//                     border-radius: 5px;
//                     border: 2px solid black;
//                     margin-bottom: 10px;
//                     &:focus{
//                         outline: none;
//                         border-color: red;
//                     }
//                 }
//             }
    
//             .formButtons{
//                 width: 50%;
//                 display: flex;
//                 justify-content: center;
    
//                 &1,&2{
//                     background-color: red;
//                     margin: 5px;
//                     padding: 5px;
//                     border-radius: 5px;
    
//                     &:hover{
//                         background-color: rgba(255, 0, 0, 0.649);
//                     }
//                 }
//             }
//         }
    
//     }
// }

// @media(max-width:500px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 10px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 flex-direction: column;
//                 padding-right: 20px;
//                 .subscribeSection{
//                     display: flex;
//                     justify-content: space-between;
//                     padding: 3px;
//                     width: 100%;
    
//                     .section1{
//                         width: 100%;
//                         display: flex;
//                         justify-content: space-between;
//                         flex-direction: row;
//                         align-items: center;
    
//                         .section11{
//                             display: flex;
//                             align-items: center;
    
//                             .section111{
//                                 img{
//                                     width: 45px;
//                                     height: 45px;
//                                     border-radius: 50%;
//                                 }
//                                 margin-right: 4px;
//                             }
    
//                             .section112{
//                                 .ownerName{
//                                     font-size: $base-font-size;
//                                     font-weight: 700;
//                                 }
//                                 .ownerSubscribers{
//                                     font-size: 12px;
//                                     color: $secondary-text;
//                                 }
                                
//                             }
//                         }
//                         .section12{
//                             display: flex;
//                             width: 50%;
//                             justify-content: space-around;
//                             align-items: center;
//                             padding: 3px 3px;
//                             .subscribeButton{
//                                 background-color: $button-color;
//                             }
//                             .likeButton{
//                                 color: $background-color;
//                                 background-color: $secondary-text;
//                                 height: 40px;
//                                 width: 70px;
//                                 border-radius: 20px;
//                                 display: flex;
//                                 align-items: center;
//                                 justify-content: center;
//                                 cursor: pointer;
//                                 .likeIcon{
//                                     font-size:30px;
//                                     background-color: $secondary-text;
//                                     color: $button-color;
//                                     border-radius: 50%;
//                                 }
//                                 .unLikeIcon{
//                                     font-size:30px;
//                                     background-color: $secondary-text;
//                                     border-radius: 50%;
//                                 }
//                                 p{
//                                     margin-left: 4px;
//                                     font-size: 22px;
//                                     font-weight: 700;
//                                 }
//                             }
//                         }
//                     }
                    
                        
//                 }
//                 .description{
//                     background-color: $secondary-color;
//                     border-radius: 20px;
//                     margin: 10px 0;
//                     padding: 10px;
//                     .section21{
//                         display: flex;
//                         flex-direction: row;
//                         color: $text-color;
//                         p{
//                             font-size: 14px;
//                             margin:5px 5px 5px 0 ;
//                         }
                        
//                     }
//                     .section22{
//                         .section221{
//                             font-weight: 700;
//                             font-size: 26px;
//                         }
//                         p{
//                             font-size: 18px;
//                         }
//                     }
//                 }
//                 .commentSection{
//                     display: flex;
//                     flex-direction: row;
//                     padding:10px 10px;
//                     .commentSection1{
//                         margin-right: 10px;
//                         p{
//                             font-size: 20px;
//                             font-weight: 700;
//                         }
//                     }
//                     .commentSection2{
//                         margin-left: 20px;
//                         width: 20%;
//                         display: flex;
//                         flex-direction: row;
//                         justify-content: space-between;
//                         align-items: center;
//                     }
//                 }
//                 .comments{
//                     .comments1{
                        

//                         .comments11{
//                             display: flex;
//                             flex-direction: row;
//                             align-items: center;
//                             width: 100%;
//                             justify-content: space-between;
//                             padding:10px 10px;
    
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                             }
//                             input{
//                                 height: 35px;
//                                 width: 40%;
//                                 color: black;
//                             }
//                         }
//                         .divider{
//                             width: 100%;
//                             height: 1px;
//                             background-color: white;
//                             margin: 20px 0;
//                         }
//                     }
//                 }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     .channelCommentsSection{
//                         display: flex;
//                         flex-direction: row;
//                         padding: 10px 0;
//                         width:100% ;
//                         align-items: center;
//                         height: auto;
//                         overflow-wrap: break-word;
    
//                         .channelCommentsSection1{
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                                 margin: 0 20px 0 0;
//                             }
//                         }
//                         .channelCommentsSection2{
//                             width: 100%;
//                             .channelCommentsSection21{
//                                 display: flex;
//                                 align-items: center;
//                                 .channelCommentsSection211{
//                                     margin: 0 20px 0 0;
                                    
//                                 }
//                                 .channelCommentsSection212{
//                                     color: $secondary-text;
//                                 }
//                                 .channelCommentsSection213{
//                                     margin-left: 2rem;
//                                 }
//                                 .commentDropdown{
//                                     position: absolute;
//                                     display: flex;
//                                     flex-direction: column;
//                                     margin-left: 300px;
//                                     button{
//                                         font-size: 10px;
//                                     }
//                                 }
//                             }
//                             &2{
//                                 height: auto;
//                                 width: 100%;
//                                 &1{
//                                     width: 100%;
//                                     word-break: break-word; /* Ensure long words break and wrap */
//                                     overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                                     white-space: normal;
//                                 }
//                             }
//                             .channelCommensSection23{
//                                 display: flex;
//                                 flex-direction: row;
//                                 justify-content: space-between;
//                                 width: 30px;
//                                 align-items: center;
//                                 .channelCommensSection231{
//                                     // color: red;
//                                     .likeIcon{
//                                         color: red;
//                                     }
//                                     .unLikeIcon{
//                                         color:white;
//                                     }
//                                 }
                                
//                                 p{
//                                     color: $secondary-text;
//                                 }
//                             }
//                         }
//                     }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 53vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 9px 15px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 // height: 60vw;
//                 padding: 20px 15px 20vw 0px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 0px;
//                 gap: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 98vw;
//                     height: 75vw;
//                     display: flex;
//                     flex-direction: column;
//                     justify-content: flex-start;
//                     border: 2px solid rgb(45, 45, 45);

//                     // gap: 2px;

//                     padding-right: 0px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
//                     background-color: $hover-bg-color;

//                     &:hover{
//                         transform: scale(1);
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 100%;
//                         height: 47vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 0px;
//                         .watchVideoSection11{
//                             margin: 0 0px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 100%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 18px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 14px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 12px;
//                             }
//                             .dot{
//                                 font-size: 12px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 12px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         position: fixed;
//         left: 0;
//         top:0;
//         width: 100%;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 75%;
//             height: 20%;
//             background-color: black;
//             padding: 10px;
//             display: flex;
//             align-items: center;
//             flex-direction: column;
//             box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             transition: 0.4s;
//             border-radius: 10px;
    
//             &:hover{
//                 transform: scale(0.98);
//             }
//             .editCommentContainer11{
//                 font-size: 20px;
//                 font-weight: 700;
//                 margin-bottom: 10px;
//             }
//             .editCommentContainer12{
//                 width: 100%;
//                 display: flex;
//                 flex-direction: column;
//                 .editCommentContainer121{
//                     font-size: 16px;
//                     font-weight: 600;
//                 }
//                 .editCommentContainer122{
//                     color: black;
//                     border-radius: 5px;
//                     border: 2px solid black;
//                     margin-bottom: 10px;
//                     &:focus{
//                         outline: none;
//                         border-color: red;
//                     }
//                 }
//             }
    
//             .formButtons{
//                 width: 50%;
//                 display: flex;
//                 justify-content: center;
    
//                 &1,&2{
//                     background-color: red;
//                     margin: 5px;
//                     padding: 5px;
//                     border-radius: 5px;
    
//                     &:hover{
//                         background-color: rgba(255, 0, 0, 0.649);
//                     }
//                 }
//             }
//         }
    
//     }
// }


// // @media(max-width:360px){
    
// // }


// // *{
// //     background-color:#0f0f0f;
// // }

// // body{
// //     background-color:#0f0f0f;
// // }
// @import '../../index.scss';

// .box{
//     padding:0vw;
//     width: 99%;
//     height: auto;
//     .SearchBar{
//         position: fixed;
//         height: 56px;
//         width: 100vw;
//         background-color:$background-color;
//         z-index: 100;
//     }
//         .displayer{
//             width: 100%;
//             background-color: aqua;
//         }
//         .left-side2{
//             position: fixed;
//             margin-top: 4%;
        
//             height: 100vh;
//             color: white;
//             background-color:$background-color;
//             z-index: 2;
//         }
//         .left-side {
//             position: fixed;
//             margin-top: 4%;
//             width: 15%;
//             height: 100vh;
//             color: white;
//             background-color:$background-color;
//             z-index: 2;
//         }
//         .right-side-WithNav {
//             // width: 100%;
//             // height: auto;
//             // display: flex;
//             // flex-direction: column;
//             // background-color:$background-color;
            
//         }
//         .right-side-WithoutNav{
//             margin-top:4%;
            
//             width: 100%;
//             height: auto;
//             display: flex;
//             flex-direction: column;
//             background-color:$background-color;
            
//         }
//     }
    
    
//     .watchVideo-container {
//         background-color: $background-color;
//         display: flex;
//         justify-content: space-between;
//         // margin: 20px;
//         margin-top: 5px;
//         height: auto;
    
//         width: 100%;
//         height: 100vh;
    
//         .watchVideo-left-side {
//             width: 68%;
//             height: auto;
//             display: flex;
        
//             flex-direction: column;
//             padding-right: 20px;
//             .subscribeSection{
//                 display: flex;
//                 justify-content: space-between;
//                 padding: 3px;
//                 width: 100%;

//                 .section1{
//                     width: 70%;
//                     display: flex;
//                     justify-content: space-between;
//                     flex-direction: row;
//                     align-items: center;

//                     .section11{
//                         display: flex;
//                         align-items: center;

//                         .section111{
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                             }
//                             margin-right: 4px;
//                         }

//                         .section112{
//                             .ownerName{
//                                 font-size: $base-font-size;
//                                 font-weight: 700;
//                             }
//                             .ownerSubscribers{
//                                 font-size: 12px;
//                                 color: $secondary-text;
//                             }
                            
//                         }
//                     }
//                     .section12{
//                         display: flex;
//                         width: 50%;
//                         justify-content: space-around;
//                         align-items: center;
//                         padding: 3px 3px;
//                         .subscribeButton{
//                             background-color: $button-color;
//                         }
//                         .likeButton{
//                             color: $background-color;
//                             background-color: $secondary-text;
//                             height: 40px;
//                             width: 80px;
//                             border-radius: 20px;
//                             display: flex;
//                             align-items: center;
//                             justify-content: center;
//                             cursor: pointer;
//                             .likeIcon{
//                                 font-size:30px;
//                                 background-color: $secondary-text;
//                                 color: $button-color;
//                                 border-radius: 50%;
//                             }
//                             .unLikeIcon{
//                                 font-size:30px;
//                                 background-color: $secondary-text;
//                                 border-radius: 50%;
//                             }
//                             p{
//                                 margin-left: 4px;
//                                 font-size: 22px;
//                                 font-weight: 700;
//                             }
//                         }
//                     }
//                 }
                
                    
//             }
//             .description{
//                 background-color: $secondary-color;
//                 border-radius: 20px;
//                 margin: 10px 0;
//                 padding: 10px;
//                 .section21{
//                     display: flex;
//                     flex-direction: row;
//                     color: $text-color;
//                     p{
//                         font-size: 14px;
//                         margin:5px 5px 5px 0 ;
//                     }
                    
//                 }
//                 .section22{
//                     .section221{
//                         font-weight: 700;
//                         font-size: 26px;
//                     }
//                     p{
//                         font-size: 22px;
//                     }
//                 }
//             }
//             .commentSection{
//                 display: flex;
//                 flex-direction: row;
//                 padding:10px 10px;
//                 .commentSection1{
//                     margin-right: 10px;
//                     p{
//                         font-size: 20px;
//                         font-weight: 700;
//                     }
//                 }
//                 .commentSection2{
//                     margin-left: 20px;
//                     width: 9%;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: space-between;
//                     align-items: center;
//                 }
//             }
//             .comments{
//                 .comments1{
//                     .comments11{
//                         display: flex;
//                         flex-direction: row;
//                         align-items: center;
//                         width: 100%;
//                         justify-content: space-between;
//                         padding:10px 10px;

//                         img{
//                             width: 45px;
//                             height: 45px;
//                             border-radius: 50%;
//                         }
//                         input{
//                             height: 30px;
//                             width: 60%;
//                             color: black;
//                         }
//                     }
//                     .divider{
//                         width: 100%;
//                         height: 1px;
//                         background-color: white;
//                         margin: 20px 0;
//                     }
//                 }
//             }
//             .channelComments{
//                 display: flex;
//                 flex-direction: column;
//                 padding: 10px 10px;
//                 width: 100%;
//                 .channelCommentsSection{
//                     display: flex;
//                     flex-direction: row;
//                     padding: 10px 0;
//                     width:100% ;
//                     align-items: center;
//                     height: auto;
//                     overflow-wrap: break-word;

//                     .channelCommentsSection1{
//                         img{
//                             width: 45px;
//                             height: 45px;
//                             border-radius: 50%;
//                             margin: 0 20px 0 0;
//                         }
//                     }
//                     .channelCommentsSection2{
//                         width: 100%;
//                         .channelCommentsSection21{
//                             display: flex;
//                             align-items: center;
//                             .channelCommentsSection211{
//                                 margin: 0 20px 0 0;
                                
//                             }
//                             .channelCommentsSection212{
//                                 color: $secondary-text;
//                             }
//                             .channelCommentsSection213{
//                                 margin-left: 2rem;
//                             }
//                             .commentDropdown{
//                                 position: absolute;
//                                 display: flex;
//                                 flex-direction: column;
//                                 margin-left: 300px;
//                                 button{
//                                     font-size: 10px;
//                                 }
//                             }
//                         }
//                         &2{
//                             height: auto;
//                             width: 100%;
//                             &1{
//                                 width: 100%;
//                                 word-break: break-word; /* Ensure long words break and wrap */
//                                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                                 white-space: normal;
//                             }
//                         }
//                         .channelCommensSection23{
//                             display: flex;
//                             flex-direction: row;
//                             justify-content: space-between;
//                             width: 30px;
//                             align-items: center;
//                             .channelCommensSection231{
//                                 // color: red;
//                                 .likeIcon{
//                                     color: red;
//                                 }
//                                 .unLikeIcon{
//                                     color:white;
//                                 }
//                             }
                            
//                             p{
//                                 color: $secondary-text;
//                             }
//                         }
//                     }
//                 }
//             }
            

//             video {
//                 width: 100%;
//                 border-radius: 20px;
//                 height: 35vw;
//                 // pointer-events: none;
//             }
    
//             button {
//                 margin-top: 10px;
//                 padding: 10px 20px;
//                 background-color: #4a4a4a;
//                 color: white;
//                 border: none;
//                 border-radius: 5px;
//                 cursor: pointer;
    
//                 &:hover {
//                     background-color: #6a6a6a;
//                 }
//             }
    
//             .video-title {
//                 width: 100%;
//                 color: white;
//                 font-weight: bold;
//                 font-size: 1.3rem;
//                 margin-top: 10px;
//             }
//         }
    
//         .watchVideo-right-side {
//             width: 30%;
//             display: flex;
//             flex-direction: column;
//             margin-right: 5px;
//             color: $text-color;
//             font-size: $base-font-size;
//             background-color: $background-color;
//             height: auto;
//             align-items: center;
//             .watchVideoSection{
//                 width: 50vh;
//                 display: flex;
//                 flex-direction: row;
//                 justify-content: space-between;
//                 padding: 5px;
//                 transition-duration: 0.5s;
//                 border-radius: 10px;

//                 &:hover{
//                     transform: scale(0.98);
//                     background-color: $hover-bg-color;
//                     box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                 }
//                 .watchVideoSection1{
//                     width: 45%;
//                     height: 15vh;
//                     display: flex;
//                     align-items: center;
//                     .watchVideoSection11{
//                         margin: 0 6px 0 0 ;
//                         width: 100%;
//                         height: 100%;
//                         border-radius: 5px;
//                         // object-fit:cover;
//                     }
//                 }
//                 .watchVideoSection2{
//                     width: 50%;
//                     .watchVideoSection21{
//                         .watchVideoSection211{
//                             font-size: 14px;
//                             font-weight: 700;
//                         }
//                     }
//                     .watchVideoSection22{
//                         margin-top: 5px;
//                         .watchVideoSection221{
//                             font-size: 13px;
//                             color: $secondary-text;
//                         }
//                     }
//                     .watchVideoSection23{
//                         display: flex;
//                         flex-direction: row;
//                         font-size: 12px;
//                         color: $secondary-text;
//                         .views{
//                             font-size: 12px;
//                         }
//                         .dot{
//                             font-size: 12px;
//                         }
//                         .time{
//                             font-size: 12px;
//                         }
//                     }
//                 }
//             }
//         }
    
//     }

// .editCommentContainer{
//     position: fixed;
//     left: 0;
//     top:0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: rgba(0, 0, 0, 0.571);
    
    
//     .editCommentContainer1{
//         width: 35%;
//         height: 25%;
//         background-color: black;
//         padding: 10px;
//         display: flex;
//         align-items: center;
//         flex-direction: column;
//         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//         transition: 0.4s;
//         border-radius: 10px;

//         &:hover{
//             transform: scale(0.98);
//         }
//         .editCommentContainer11{
//             font-size: 20px;
//             font-weight: 700;
//             margin-bottom: 10px;
//         }
//         .editCommentContainer12{
//             width: 100%;
//             display: flex;
//             flex-direction: column;
//             .editCommentContainer121{
//                 font-size: 16px;
//                 font-weight: 600;
//             }
//             .editCommentContainer122{
//                 color: black;
//                 border-radius: 5px;
//                 border: 2px solid black;
//                 margin-bottom: 10px;
//                 &:focus{
//                     outline: none;
//                     border-color: red;
//                 }
//             }
//         }

//         .formButtons{
//             width: 50%;
//             display: flex;
//             justify-content: center;

//             &1,&2{
//                 background-color: red;
//                 margin: 5px;
//                 padding: 5px;
//                 border-radius: 5px;

//                 &:hover{
//                     background-color: rgba(255, 0, 0, 0.649);
//                 }
//             }
//         }
//     }

// }


// @media(max-width:1280px){
//     .box{
//         padding:0vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             // position: fixed;
//             // height: 56px;
//             // width: 100vw;
//             // background-color:$background-color;
//             // z-index: 100;
//         }
//             // .displayer{
//             //     width: 100%;
//             //     background-color: aqua;
//             // }
//             // .left-side2{
//             //     position: fixed;
//             //     margin-top: 4%;
            
//             //     height: 100vh;
//             //     color: white;
//             //     background-color:$background-color;
//             //     z-index: 2;
//             // }
//             // .left-side {
//             //     position: fixed;
//             //     margin-top: 4%;
//             //     width: 15%;
//             //     height: 100vh;
//             //     color: white;
//             //     background-color:$background-color;
//             //     z-index: 2;
//             // }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 // margin-top:4%;
                
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             // // margin: 20px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 45vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     // background-color: #4a4a4a;
//                     // color: white;
//                     // border: none;
//                     // border-radius: 5px;
//                     // cursor: pointer;
        
//                     // &:hover {
//                     //     background-color: #6a6a6a;
//                     // }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     // color: white;
//                     // font-weight: bold;
//                     // font-size: 1.3rem;
//                     // margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 0;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 // color: $text-color;
//                 // font-size: $base-font-size;
//                 // background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 80vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
    
//                     // &:hover{
//                     //     transform: scale(0.98);
//                     //     background-color: $hover-bg-color;
//                     //     box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     // }
//                     .watchVideoSection1{
//                         width: 30%;
//                         height: 15vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 60%;
//                         .watchVideoSection21{
//                             // .watchVideoSection211{
//                             //     font-size: 26px;
//                             //     font-weight: 700;
//                             // }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             // .watchVideoSection221{
//                             //     font-size: 18px;
//                             //     color: $secondary-text;
//                             // }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             // color: $secondary-text;
//                             .views{
//                                 font-size: 14px;
//                             }
//                             .dot{
//                                 font-size: 14px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 14px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     // .editCommentContainer{
//     //     position: fixed;
//     //     left: 0;
//     //     top:0;
//     //     width: 100%;
//     //     height: 100%;
//     //     display: flex;
//     //     align-items: center;
//     //     justify-content: center;
//     //     background-color: rgba(0, 0, 0, 0.571);
        
        
//     //     .editCommentContainer1{
//     //         width: 35%;
//     //         height: 20%;
//     //         background-color: black;
//     //         padding: 10px;
//     //         display: flex;
//     //         align-items: center;
//     //         flex-direction: column;
//     //         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//     //         transition: 0.4s;
//     //         border-radius: 10px;
    
//     //         &:hover{
//     //             transform: scale(0.98);
//     //         }
//     //         .editCommentContainer11{
//     //             font-size: 20px;
//     //             font-weight: 700;
//     //             margin-bottom: 10px;
//     //         }
//     //         .editCommentContainer12{
//     //             width: 100%;
//     //             display: flex;
//     //             flex-direction: column;
//     //             .editCommentContainer121{
//     //                 font-size: 16px;
//     //                 font-weight: 600;
//     //             }
//     //             .editCommentContainer122{
//     //                 color: black;
//     //                 border-radius: 5px;
//     //                 border: 2px solid black;
//     //                 margin-bottom: 10px;
//     //                 &:focus{
//     //                     outline: none;
//     //                     border-color: red;
//     //                 }
//     //             }
//     //         }
    
//     //         .formButtons{
//     //             width: 50%;
//     //             display: flex;
//     //             justify-content: center;
    
//     //             &1,&2{
//     //                 background-color: red;
//     //                 margin: 5px;
//     //                 padding: 5px;
//     //                 border-radius: 5px;
    
//     //                 &:hover{
//     //                     background-color: rgba(255, 0, 0, 0.649);
//     //                 }
//     //             }
//     //         }
//     //     }
    
//     // }
// }

// @media(max-width:1024px){
//     video {
//         width: 100%;
//         border-radius: 20px;
//         height: 55vw;
//         // pointer-events: none;
//     }
// }

// @media(max-width:767px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 40px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 55vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 100px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 80vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
    
//                     &:hover{
//                         transform: scale(0.98);
//                         background-color: $hover-bg-color;
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 30%;
//                         height: 15vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 60%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 22px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 16px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 14px;
//                             }
//                             .dot{
//                                 font-size: 14px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 14px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         // position: fixed;
//         // left: 0;
//         // top:0;
//         // width: 100%;
//         // height: 100%;
//         // display: flex;
//         // align-items: center;
//         // justify-content: center;
//         // background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 45%;
//             height: 18%;
//             // background-color: black;
//             // padding: 10px;
//             // display: flex;
//             // align-items: center;
//             // flex-direction: column;
//             // box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             // transition: 0.4s;
//             // border-radius: 10px;
    
//             // &:hover{
//             //     transform: scale(0.98);
//             // }
//             // .editCommentContainer11{
//             //     font-size: 20px;
//             //     font-weight: 700;
//             //     margin-bottom: 10px;
//             // }
//             // .editCommentContainer12{
//             //     width: 100%;
//             //     display: flex;
//             //     flex-direction: column;
//             //     .editCommentContainer121{
//             //         font-size: 16px;
//             //         font-weight: 600;
//             //     }
//             //     .editCommentContainer122{
//             //         color: black;
//             //         border-radius: 5px;
//             //         border: 2px solid black;
//             //         margin-bottom: 10px;
//             //         &:focus{
//             //             outline: none;
//             //             border-color: red;
//             //         }
//             //     }
//             // }
    
//             // .formButtons{
//             //     width: 50%;
//             //     display: flex;
//             //     justify-content: center;
    
//             //     &1,&2{
//             //         background-color: red;
//             //         margin: 5px;
//             //         padding: 5px;
//             //         border-radius: 5px;
    
//             //         &:hover{
//             //             background-color: rgba(255, 0, 0, 0.649);
//             //         }
//             //     }
//             // }
//         }
    
//     }
// }

// @media(max-width:600px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 10px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 55vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 10px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 gap: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 95vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;
//                     border: 2px solid rgb(45, 45, 45);

//                     // gap: 2px;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
//                     background-color: $hover-bg-color;

//                     &:hover{
//                         transform: scale(1);
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 50%;
//                         height: 25vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 50%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 18px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 14px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 12px;
//                             }
//                             .dot{
//                                 font-size: 12px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 12px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         position: fixed;
//         left: 0;
//         top:0;
//         width: 100%;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 65%;
//             height: 25%;
//             background-color: black;
//             padding: 10px;
//             display: flex;
//             align-items: center;
//             flex-direction: column;
//             box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             transition: 0.4s;
//             border-radius: 10px;
    
//             &:hover{
//                 transform: scale(0.98);
//             }
//             .editCommentContainer11{
//                 font-size: 20px;
//                 font-weight: 700;
//                 margin-bottom: 10px;
//             }
//             .editCommentContainer12{
//                 width: 100%;
//                 display: flex;
//                 flex-direction: column;
//                 .editCommentContainer121{
//                     font-size: 16px;
//                     font-weight: 600;
//                 }
//                 .editCommentContainer122{
//                     color: black;
//                     border-radius: 5px;
//                     border: 2px solid black;
//                     margin-bottom: 10px;
//                     &:focus{
//                         outline: none;
//                         border-color: red;
//                     }
//                 }
//             }
    
//             .formButtons{
//                 width: 50%;
//                 display: flex;
//                 justify-content: center;
    
//                 &1,&2{
//                     background-color: red;
//                     margin: 5px;
//                     padding: 5px;
//                     border-radius: 5px;
    
//                     &:hover{
//                         background-color: rgba(255, 0, 0, 0.649);
//                     }
//                 }
//             }
//         }
    
//     }
// }

// @media(max-width:500px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 10px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 flex-direction: column;
//                 padding-right: 20px;
//                 .subscribeSection{
//                     display: flex;
//                     justify-content: space-between;
//                     padding: 3px;
//                     width: 100%;
    
//                     .section1{
//                         width: 100%;
//                         display: flex;
//                         justify-content: space-between;
//                         flex-direction: row;
//                         align-items: center;
    
//                         .section11{
//                             display: flex;
//                             align-items: center;
    
//                             .section111{
//                                 img{
//                                     width: 45px;
//                                     height: 45px;
//                                     border-radius: 50%;
//                                 }
//                                 margin-right: 4px;
//                             }
    
//                             .section112{
//                                 .ownerName{
//                                     font-size: $base-font-size;
//                                     font-weight: 700;
//                                 }
//                                 .ownerSubscribers{
//                                     font-size: 12px;
//                                     color: $secondary-text;
//                                 }
                                
//                             }
//                         }
//                         .section12{
//                             display: flex;
//                             width: 50%;
//                             justify-content: space-around;
//                             align-items: center;
//                             padding: 3px 3px;
//                             .subscribeButton{
//                                 background-color: $button-color;
//                             }
//                             .likeButton{
//                                 color: $background-color;
//                                 background-color: $secondary-text;
//                                 height: 40px;
//                                 width: 70px;
//                                 border-radius: 20px;
//                                 display: flex;
//                                 align-items: center;
//                                 justify-content: center;
//                                 cursor: pointer;
//                                 .likeIcon{
//                                     font-size:30px;
//                                     background-color: $secondary-text;
//                                     color: $button-color;
//                                     border-radius: 50%;
//                                 }
//                                 .unLikeIcon{
//                                     font-size:30px;
//                                     background-color: $secondary-text;
//                                     border-radius: 50%;
//                                 }
//                                 p{
//                                     margin-left: 4px;
//                                     font-size: 22px;
//                                     font-weight: 700;
//                                 }
//                             }
//                         }
//                     }
                    
                        
//                 }
//                 .description{
//                     background-color: $secondary-color;
//                     border-radius: 20px;
//                     margin: 10px 0;
//                     padding: 10px;
//                     .section21{
//                         display: flex;
//                         flex-direction: row;
//                         color: $text-color;
//                         p{
//                             font-size: 14px;
//                             margin:5px 5px 5px 0 ;
//                         }
                        
//                     }
//                     .section22{
//                         .section221{
//                             font-weight: 700;
//                             font-size: 26px;
//                         }
//                         p{
//                             font-size: 18px;
//                         }
//                     }
//                 }
//                 .commentSection{
//                     display: flex;
//                     flex-direction: row;
//                     padding:10px 10px;
//                     .commentSection1{
//                         margin-right: 10px;
//                         p{
//                             font-size: 20px;
//                             font-weight: 700;
//                         }
//                     }
//                     .commentSection2{
//                         margin-left: 20px;
//                         width: 20%;
//                         display: flex;
//                         flex-direction: row;
//                         justify-content: space-between;
//                         align-items: center;
//                     }
//                 }
//                 .comments{
//                     .comments1{
                        

//                         .comments11{
//                             display: flex;
//                             flex-direction: row;
//                             align-items: center;
//                             width: 100%;
//                             justify-content: space-between;
//                             padding:10px 10px;
    
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                             }
//                             input{
//                                 height: 35px;
//                                 width: 40%;
//                                 color: black;
//                             }
//                         }
//                         .divider{
//                             width: 100%;
//                             height: 1px;
//                             background-color: white;
//                             margin: 20px 0;
//                         }
//                     }
//                 }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     .channelCommentsSection{
//                         display: flex;
//                         flex-direction: row;
//                         padding: 10px 0;
//                         width:100% ;
//                         align-items: center;
//                         height: auto;
//                         overflow-wrap: break-word;
    
//                         .channelCommentsSection1{
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                                 margin: 0 20px 0 0;
//                             }
//                         }
//                         .channelCommentsSection2{
//                             width: 100%;
//                             .channelCommentsSection21{
//                                 display: flex;
//                                 align-items: center;
//                                 .channelCommentsSection211{
//                                     margin: 0 20px 0 0;
                                    
//                                 }
//                                 .channelCommentsSection212{
//                                     color: $secondary-text;
//                                 }
//                                 .channelCommentsSection213{
//                                     margin-left: 2rem;
//                                 }
//                                 .commentDropdown{
//                                     position: absolute;
//                                     display: flex;
//                                     flex-direction: column;
//                                     margin-left: 300px;
//                                     button{
//                                         font-size: 10px;
//                                     }
//                                 }
//                             }
//                             &2{
//                                 height: auto;
//                                 width: 100%;
//                                 &1{
//                                     width: 100%;
//                                     word-break: break-word; /* Ensure long words break and wrap */
//                                     overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                                     white-space: normal;
//                                 }
//                             }
//                             .channelCommensSection23{
//                                 display: flex;
//                                 flex-direction: row;
//                                 justify-content: space-between;
//                                 width: 30px;
//                                 align-items: center;
//                                 .channelCommensSection231{
//                                     // color: red;
//                                     .likeIcon{
//                                         color: red;
//                                     }
//                                     .unLikeIcon{
//                                         color:white;
//                                     }
//                                 }
                                
//                                 p{
//                                     color: $secondary-text;
//                                 }
//                             }
//                         }
//                     }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 53vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 9px 15px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 // height: 60vw;
//                 padding: 20px 15px 20vw 0px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 0px;
//                 gap: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 98vw;
//                     height: 75vw;
//                     display: flex;
//                     flex-direction: column;
//                     justify-content: flex-start;
//                     border: 2px solid rgb(45, 45, 45);

//                     // gap: 2px;

//                     padding-right: 0px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
//                     background-color: $hover-bg-color;

//                     &:hover{
//                         transform: scale(1);
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 100%;
//                         height: 47vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 0px;
//                         .watchVideoSection11{
//                             margin: 0 0px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 100%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 18px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 14px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 12px;
//                             }
//                             .dot{
//                                 font-size: 12px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 12px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         position: fixed;
//         left: 0;
//         top:0;
//         width: 100%;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 75%;
//             height: 20%;
//             background-color: black;
//             padding: 10px;
//             display: flex;
//             align-items: center;
//             flex-direction: column;
//             box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             transition: 0.4s;
//             border-radius: 10px;
    
//             &:hover{
//                 transform: scale(0.98);
//             }
//             .editCommentContainer11{
//                 font-size: 20px;
//                 font-weight: 700;
//                 margin-bottom: 10px;
//             }
//             .editCommentContainer12{
//                 width: 100%;
//                 display: flex;
//                 flex-direction: column;
//                 .editCommentContainer121{
//                     font-size: 16px;
//                     font-weight: 600;
//                 }
//                 .editCommentContainer122{
//                     color: black;
//                     border-radius: 5px;
//                     border: 2px solid black;
//                     margin-bottom: 10px;
//                     &:focus{
//                         outline: none;
//                         border-color: red;
//                     }
//                 }
//             }
    
//             .formButtons{
//                 width: 50%;
//                 display: flex;
//                 justify-content: center;
    
//                 &1,&2{
//                     background-color: red;
//                     margin: 5px;
//                     padding: 5px;
//                     border-radius: 5px;
    
//                     &:hover{
//                         background-color: rgba(255, 0, 0, 0.649);
//                     }
//                 }
//             }
//         }
    
//     }
// }


// // @media(max-width:360px){
    
// // }



// // *{
// //     background-color:#0f0f0f;
// // }

// // body{
// //     background-color:#0f0f0f;
// // }
// @import '../../index.scss';

// .box{
//     padding:0vw;
//     width: 99%;
//     height: auto;
//     .SearchBar{
//         position: fixed;
//         height: 56px;
//         width: 100vw;
//         background-color:$background-color;
//         z-index: 100;
//     }
//         .displayer{
//             width: 100%;
//             background-color: aqua;
//         }
//         .left-side2{
//             position: fixed;
//             margin-top: 4%;
        
//             height: 100vh;
//             color: white;
//             background-color:$background-color;
//             z-index: 2;
//         }
//         .left-side {
//             position: fixed;
//             margin-top: 4%;
//             width: 15%;
//             height: 100vh;
//             color: white;
//             background-color:$background-color;
//             z-index: 2;
//         }
//         .right-side-WithNav {
//             // width: 100%;
//             // height: auto;
//             // display: flex;
//             // flex-direction: column;
//             // background-color:$background-color;
            
//         }
//         .right-side-WithoutNav{
//             margin-top:4%;
            
//             width: 100%;
//             height: auto;
//             display: flex;
//             flex-direction: column;
//             background-color:$background-color;
            
//         }
//     }
    
    
//     .watchVideo-container {
//         background-color: $background-color;
//         display: flex;
//         justify-content: space-between;
//         // margin: 20px;
//         margin-top: 5px;
//         height: auto;
    
//         width: 100%;
//         height: 100vh;
    
//         .watchVideo-left-side {
//             width: 68%;
//             height: auto;
//             display: flex;
        
//             flex-direction: column;
//             padding-right: 20px;
//             .subscribeSection{
//                 display: flex;
//                 justify-content: space-between;
//                 padding: 3px;
//                 width: 100%;

//                 .section1{
//                     width: 70%;
//                     display: flex;
//                     justify-content: space-between;
//                     flex-direction: row;
//                     align-items: center;

//                     .section11{
//                         display: flex;
//                         align-items: center;

//                         .section111{
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                             }
//                             margin-right: 4px;
//                         }

//                         .section112{
//                             .ownerName{
//                                 font-size: $base-font-size;
//                                 font-weight: 700;
//                             }
//                             .ownerSubscribers{
//                                 font-size: 12px;
//                                 color: $secondary-text;
//                             }
                            
//                         }
//                     }
//                     .section12{
//                         display: flex;
//                         width: 50%;
//                         justify-content: space-around;
//                         align-items: center;
//                         padding: 3px 3px;
//                         .subscribeButton{
//                             background-color: $button-color;
//                         }
//                         .likeButton{
//                             color: $background-color;
//                             background-color: $secondary-text;
//                             height: 40px;
//                             width: 80px;
//                             border-radius: 20px;
//                             display: flex;
//                             align-items: center;
//                             justify-content: center;
//                             cursor: pointer;
//                             .likeIcon{
//                                 font-size:30px;
//                                 background-color: $secondary-text;
//                                 color: $button-color;
//                                 border-radius: 50%;
//                             }
//                             .unLikeIcon{
//                                 font-size:30px;
//                                 background-color: $secondary-text;
//                                 border-radius: 50%;
//                             }
//                             p{
//                                 margin-left: 4px;
//                                 font-size: 22px;
//                                 font-weight: 700;
//                             }
//                         }
//                     }
//                 }
                
                    
//             }
//             .description{
//                 background-color: $secondary-color;
//                 border-radius: 20px;
//                 margin: 10px 0;
//                 padding: 10px;
//                 .section21{
//                     display: flex;
//                     flex-direction: row;
//                     color: $text-color;
//                     p{
//                         font-size: 14px;
//                         margin:5px 5px 5px 0 ;
//                     }
                    
//                 }
//                 .section22{
//                     .section221{
//                         font-weight: 700;
//                         font-size: 26px;
//                     }
//                     p{
//                         font-size: 22px;
//                     }
//                 }
//             }
//             .commentSection{
//                 display: flex;
//                 flex-direction: row;
//                 padding:10px 10px;
//                 .commentSection1{
//                     margin-right: 10px;
//                     p{
//                         font-size: 20px;
//                         font-weight: 700;
//                     }
//                 }
//                 .commentSection2{
//                     margin-left: 20px;
//                     width: 9%;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: space-between;
//                     align-items: center;
//                 }
//             }
//             .comments{
//                 .comments1{
//                     .comments11{
//                         display: flex;
//                         flex-direction: row;
//                         align-items: center;
//                         width: 100%;
//                         justify-content: space-between;
//                         padding:10px 10px;

//                         img{
//                             width: 45px;
//                             height: 45px;
//                             border-radius: 50%;
//                         }
//                         input{
//                             height: 30px;
//                             width: 60%;
//                             color: black;
//                         }
//                     }
//                     .divider{
//                         width: 100%;
//                         height: 1px;
//                         background-color: white;
//                         margin: 20px 0;
//                     }
//                 }
//             }
//             .channelComments{
//                 display: flex;
//                 flex-direction: column;
//                 padding: 10px 10px;
//                 width: 100%;
//                 .channelCommentsSection{
//                     display: flex;
//                     flex-direction: row;
//                     padding: 10px 0;
//                     width:100% ;
//                     align-items: center;
//                     height: auto;
//                     overflow-wrap: break-word;

//                     .channelCommentsSection1{
//                         img{
//                             width: 45px;
//                             height: 45px;
//                             border-radius: 50%;
//                             margin: 0 20px 0 0;
//                         }
//                     }
//                     .channelCommentsSection2{
//                         width: 100%;
//                         .channelCommentsSection21{
//                             display: flex;
//                             align-items: center;
//                             .channelCommentsSection211{
//                                 margin: 0 20px 0 0;
                                
//                             }
//                             .channelCommentsSection212{
//                                 color: $secondary-text;
//                             }
//                             .channelCommentsSection213{
//                                 margin-left: 2rem;
//                             }
//                             .commentDropdown{
//                                 position: absolute;
//                                 display: flex;
//                                 flex-direction: column;
//                                 margin-left: 300px;
//                                 button{
//                                     font-size: 10px;
//                                 }
//                             }
//                         }
//                         &2{
//                             height: auto;
//                             width: 100%;
//                             &1{
//                                 width: 100%;
//                                 word-break: break-word; /* Ensure long words break and wrap */
//                                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                                 white-space: normal;
//                             }
//                         }
//                         .channelCommensSection23{
//                             display: flex;
//                             flex-direction: row;
//                             justify-content: space-between;
//                             width: 30px;
//                             align-items: center;
//                             .channelCommensSection231{
//                                 // color: red;
//                                 .likeIcon{
//                                     color: red;
//                                 }
//                                 .unLikeIcon{
//                                     color:white;
//                                 }
//                             }
                            
//                             p{
//                                 color: $secondary-text;
//                             }
//                         }
//                     }
//                 }
//             }
            

//             video {
//                 width: 100%;
//                 border-radius: 20px;
//                 height: 35vw;
//                 // pointer-events: none;
//             }
    
//             button {
//                 margin-top: 10px;
//                 padding: 10px 20px;
//                 background-color: #4a4a4a;
//                 color: white;
//                 border: none;
//                 border-radius: 5px;
//                 cursor: pointer;
    
//                 &:hover {
//                     background-color: #6a6a6a;
//                 }
//             }
    
//             .video-title {
//                 width: 100%;
//                 color: white;
//                 font-weight: bold;
//                 font-size: 1.3rem;
//                 margin-top: 10px;
//             }
//         }
    
//         .watchVideo-right-side {
//             width: 30%;
//             display: flex;
//             flex-direction: column;
//             margin-right: 5px;
//             color: $text-color;
//             font-size: $base-font-size;
//             background-color: $background-color;
//             height: auto;
//             align-items: center;
//             .watchVideoSection{
//                 width: 50vh;
//                 display: flex;
//                 flex-direction: row;
//                 justify-content: space-between;
//                 padding: 5px;
//                 transition-duration: 0.5s;
//                 border-radius: 10px;

//                 &:hover{
//                     transform: scale(0.98);
//                     background-color: $hover-bg-color;
//                     box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                 }
//                 .watchVideoSection1{
//                     width: 45%;
//                     height: 15vh;
//                     display: flex;
//                     align-items: center;
//                     .watchVideoSection11{
//                         margin: 0 6px 0 0 ;
//                         width: 100%;
//                         height: 100%;
//                         border-radius: 5px;
//                         // object-fit:cover;
//                     }
//                 }
//                 .watchVideoSection2{
//                     width: 50%;
//                     .watchVideoSection21{
//                         .watchVideoSection211{
//                             font-size: 14px;
//                             font-weight: 700;
//                         }
//                     }
//                     .watchVideoSection22{
//                         margin-top: 5px;
//                         .watchVideoSection221{
//                             font-size: 13px;
//                             color: $secondary-text;
//                         }
//                     }
//                     .watchVideoSection23{
//                         display: flex;
//                         flex-direction: row;
//                         font-size: 12px;
//                         color: $secondary-text;
//                         .views{
//                             font-size: 12px;
//                         }
//                         .dot{
//                             font-size: 12px;
//                         }
//                         .time{
//                             font-size: 12px;
//                         }
//                     }
//                 }
//             }
//         }
    
//     }

// .editCommentContainer{
//     position: fixed;
//     left: 0;
//     top:0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: rgba(0, 0, 0, 0.571);
    
    
//     .editCommentContainer1{
//         width: 35%;
//         height: 25%;
//         background-color: black;
//         padding: 10px;
//         display: flex;
//         align-items: center;
//         flex-direction: column;
//         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//         transition: 0.4s;
//         border-radius: 10px;

//         &:hover{
//             transform: scale(0.98);
//         }
//         .editCommentContainer11{
//             font-size: 20px;
//             font-weight: 700;
//             margin-bottom: 10px;
//         }
//         .editCommentContainer12{
//             width: 100%;
//             display: flex;
//             flex-direction: column;
//             .editCommentContainer121{
//                 font-size: 16px;
//                 font-weight: 600;
//             }
//             .editCommentContainer122{
//                 color: black;
//                 border-radius: 5px;
//                 border: 2px solid black;
//                 margin-bottom: 10px;
//                 &:focus{
//                     outline: none;
//                     border-color: red;
//                 }
//             }
//         }

//         .formButtons{
//             width: 50%;
//             display: flex;
//             justify-content: center;

//             &1,&2{
//                 background-color: red;
//                 margin: 5px;
//                 padding: 5px;
//                 border-radius: 5px;

//                 &:hover{
//                     background-color: rgba(255, 0, 0, 0.649);
//                 }
//             }
//         }
//     }

// }


// @media(max-width:1280px){
//     .box{
//         padding:0vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             // position: fixed;
//             // height: 56px;
//             // width: 100vw;
//             // background-color:$background-color;
//             // z-index: 100;
//         }
//             // .displayer{
//             //     width: 100%;
//             //     background-color: aqua;
//             // }
//             // .left-side2{
//             //     position: fixed;
//             //     margin-top: 4%;
            
//             //     height: 100vh;
//             //     color: white;
//             //     background-color:$background-color;
//             //     z-index: 2;
//             // }
//             // .left-side {
//             //     position: fixed;
//             //     margin-top: 4%;
//             //     width: 15%;
//             //     height: 100vh;
//             //     color: white;
//             //     background-color:$background-color;
//             //     z-index: 2;
//             // }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 // margin-top:4%;
                
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             // // margin: 20px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 45vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     // background-color: #4a4a4a;
//                     // color: white;
//                     // border: none;
//                     // border-radius: 5px;
//                     // cursor: pointer;
        
//                     // &:hover {
//                     //     background-color: #6a6a6a;
//                     // }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     // color: white;
//                     // font-weight: bold;
//                     // font-size: 1.3rem;
//                     // margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 0;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 // color: $text-color;
//                 // font-size: $base-font-size;
//                 // background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 80vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
    
//                     // &:hover{
//                     //     transform: scale(0.98);
//                     //     background-color: $hover-bg-color;
//                     //     box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     // }
//                     .watchVideoSection1{
//                         width: 30%;
//                         height: 15vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 60%;
//                         .watchVideoSection21{
//                             // .watchVideoSection211{
//                             //     font-size: 26px;
//                             //     font-weight: 700;
//                             // }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             // .watchVideoSection221{
//                             //     font-size: 18px;
//                             //     color: $secondary-text;
//                             // }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             // color: $secondary-text;
//                             .views{
//                                 font-size: 14px;
//                             }
//                             .dot{
//                                 font-size: 14px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 14px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     // .editCommentContainer{
//     //     position: fixed;
//     //     left: 0;
//     //     top:0;
//     //     width: 100%;
//     //     height: 100%;
//     //     display: flex;
//     //     align-items: center;
//     //     justify-content: center;
//     //     background-color: rgba(0, 0, 0, 0.571);
        
        
//     //     .editCommentContainer1{
//     //         width: 35%;
//     //         height: 20%;
//     //         background-color: black;
//     //         padding: 10px;
//     //         display: flex;
//     //         align-items: center;
//     //         flex-direction: column;
//     //         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//     //         transition: 0.4s;
//     //         border-radius: 10px;
    
//     //         &:hover{
//     //             transform: scale(0.98);
//     //         }
//     //         .editCommentContainer11{
//     //             font-size: 20px;
//     //             font-weight: 700;
//     //             margin-bottom: 10px;
//     //         }
//     //         .editCommentContainer12{
//     //             width: 100%;
//     //             display: flex;
//     //             flex-direction: column;
//     //             .editCommentContainer121{
//     //                 font-size: 16px;
//     //                 font-weight: 600;
//     //             }
//     //             .editCommentContainer122{
//     //                 color: black;
//     //                 border-radius: 5px;
//     //                 border: 2px solid black;
//     //                 margin-bottom: 10px;
//     //                 &:focus{
//     //                     outline: none;
//     //                     border-color: red;
//     //                 }
//     //             }
//     //         }
    
//     //         .formButtons{
//     //             width: 50%;
//     //             display: flex;
//     //             justify-content: center;
    
//     //             &1,&2{
//     //                 background-color: red;
//     //                 margin: 5px;
//     //                 padding: 5px;
//     //                 border-radius: 5px;
    
//     //                 &:hover{
//     //                     background-color: rgba(255, 0, 0, 0.649);
//     //                 }
//     //             }
//     //         }
//     //     }
    
//     // }
// }

// @media(max-width:1024px){
//     video {
//         width: 100%;
//         border-radius: 20px;
//         height: 55vw;
//         // pointer-events: none;
//     }
// }

// @media(max-width:767px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 40px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 55vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 100px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 80vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
    
//                     &:hover{
//                         transform: scale(0.98);
//                         background-color: $hover-bg-color;
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 30%;
//                         height: 15vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 60%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 22px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 16px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 14px;
//                             }
//                             .dot{
//                                 font-size: 14px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 14px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         // position: fixed;
//         // left: 0;
//         // top:0;
//         // width: 100%;
//         // height: 100%;
//         // display: flex;
//         // align-items: center;
//         // justify-content: center;
//         // background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 45%;
//             height: 18%;
//             // background-color: black;
//             // padding: 10px;
//             // display: flex;
//             // align-items: center;
//             // flex-direction: column;
//             // box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             // transition: 0.4s;
//             // border-radius: 10px;
    
//             // &:hover{
//             //     transform: scale(0.98);
//             // }
//             // .editCommentContainer11{
//             //     font-size: 20px;
//             //     font-weight: 700;
//             //     margin-bottom: 10px;
//             // }
//             // .editCommentContainer12{
//             //     width: 100%;
//             //     display: flex;
//             //     flex-direction: column;
//             //     .editCommentContainer121{
//             //         font-size: 16px;
//             //         font-weight: 600;
//             //     }
//             //     .editCommentContainer122{
//             //         color: black;
//             //         border-radius: 5px;
//             //         border: 2px solid black;
//             //         margin-bottom: 10px;
//             //         &:focus{
//             //             outline: none;
//             //             border-color: red;
//             //         }
//             //     }
//             // }
    
//             // .formButtons{
//             //     width: 50%;
//             //     display: flex;
//             //     justify-content: center;
    
//             //     &1,&2{
//             //         background-color: red;
//             //         margin: 5px;
//             //         padding: 5px;
//             //         border-radius: 5px;
    
//             //         &:hover{
//             //             background-color: rgba(255, 0, 0, 0.649);
//             //         }
//             //     }
//             // }
//         }
    
//     }
// }

// @media(max-width:600px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 10px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 55vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 10px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 gap: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 95vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;
//                     border: 2px solid rgb(45, 45, 45);

//                     // gap: 2px;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
//                     background-color: $hover-bg-color;

//                     &:hover{
//                         transform: scale(1);
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 50%;
//                         height: 25vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 50%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 18px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 14px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 12px;
//                             }
//                             .dot{
//                                 font-size: 12px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 12px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         position: fixed;
//         left: 0;
//         top:0;
//         width: 100%;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 65%;
//             height: 25%;
//             background-color: black;
//             padding: 10px;
//             display: flex;
//             align-items: center;
//             flex-direction: column;
//             box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             transition: 0.4s;
//             border-radius: 10px;
    
//             &:hover{
//                 transform: scale(0.98);
//             }
//             .editCommentContainer11{
//                 font-size: 20px;
//                 font-weight: 700;
//                 margin-bottom: 10px;
//             }
//             .editCommentContainer12{
//                 width: 100%;
//                 display: flex;
//                 flex-direction: column;
//                 .editCommentContainer121{
//                     font-size: 16px;
//                     font-weight: 600;
//                 }
//                 .editCommentContainer122{
//                     color: black;
//                     border-radius: 5px;
//                     border: 2px solid black;
//                     margin-bottom: 10px;
//                     &:focus{
//                         outline: none;
//                         border-color: red;
//                     }
//                 }
//             }
    
//             .formButtons{
//                 width: 50%;
//                 display: flex;
//                 justify-content: center;
    
//                 &1,&2{
//                     background-color: red;
//                     margin: 5px;
//                     padding: 5px;
//                     border-radius: 5px;
    
//                     &:hover{
//                         background-color: rgba(255, 0, 0, 0.649);
//                     }
//                 }
//             }
//         }
    
//     }
// }

// @media(max-width:500px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 10px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 flex-direction: column;
//                 padding-right: 20px;
//                 .subscribeSection{
//                     display: flex;
//                     justify-content: space-between;
//                     padding: 3px;
//                     width: 100%;
    
//                     .section1{
//                         width: 100%;
//                         display: flex;
//                         justify-content: space-between;
//                         flex-direction: row;
//                         align-items: center;
    
//                         .section11{
//                             display: flex;
//                             align-items: center;
    
//                             .section111{
//                                 img{
//                                     width: 45px;
//                                     height: 45px;
//                                     border-radius: 50%;
//                                 }
//                                 margin-right: 4px;
//                             }
    
//                             .section112{
//                                 .ownerName{
//                                     font-size: $base-font-size;
//                                     font-weight: 700;
//                                 }
//                                 .ownerSubscribers{
//                                     font-size: 12px;
//                                     color: $secondary-text;
//                                 }
                                
//                             }
//                         }
//                         .section12{
//                             display: flex;
//                             width: 50%;
//                             justify-content: space-around;
//                             align-items: center;
//                             padding: 3px 3px;
//                             .subscribeButton{
//                                 background-color: $button-color;
//                             }
//                             .likeButton{
//                                 color: $background-color;
//                                 background-color: $secondary-text;
//                                 height: 40px;
//                                 width: 70px;
//                                 border-radius: 20px;
//                                 display: flex;
//                                 align-items: center;
//                                 justify-content: center;
//                                 cursor: pointer;
//                                 .likeIcon{
//                                     font-size:30px;
//                                     background-color: $secondary-text;
//                                     color: $button-color;
//                                     border-radius: 50%;
//                                 }
//                                 .unLikeIcon{
//                                     font-size:30px;
//                                     background-color: $secondary-text;
//                                     border-radius: 50%;
//                                 }
//                                 p{
//                                     margin-left: 4px;
//                                     font-size: 22px;
//                                     font-weight: 700;
//                                 }
//                             }
//                         }
//                     }
                    
                        
//                 }
//                 .description{
//                     background-color: $secondary-color;
//                     border-radius: 20px;
//                     margin: 10px 0;
//                     padding: 10px;
//                     .section21{
//                         display: flex;
//                         flex-direction: row;
//                         color: $text-color;
//                         p{
//                             font-size: 14px;
//                             margin:5px 5px 5px 0 ;
//                         }
                        
//                     }
//                     .section22{
//                         .section221{
//                             font-weight: 700;
//                             font-size: 26px;
//                         }
//                         p{
//                             font-size: 18px;
//                         }
//                     }
//                 }
//                 .commentSection{
//                     display: flex;
//                     flex-direction: row;
//                     padding:10px 10px;
//                     .commentSection1{
//                         margin-right: 10px;
//                         p{
//                             font-size: 20px;
//                             font-weight: 700;
//                         }
//                     }
//                     .commentSection2{
//                         margin-left: 20px;
//                         width: 20%;
//                         display: flex;
//                         flex-direction: row;
//                         justify-content: space-between;
//                         align-items: center;
//                     }
//                 }
//                 .comments{
//                     .comments1{
                        

//                         .comments11{
//                             display: flex;
//                             flex-direction: row;
//                             align-items: center;
//                             width: 100%;
//                             justify-content: space-between;
//                             padding:10px 10px;
    
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                             }
//                             input{
//                                 height: 35px;
//                                 width: 40%;
//                                 color: black;
//                             }
//                         }
//                         .divider{
//                             width: 100%;
//                             height: 1px;
//                             background-color: white;
//                             margin: 20px 0;
//                         }
//                     }
//                 }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     .channelCommentsSection{
//                         display: flex;
//                         flex-direction: row;
//                         padding: 10px 0;
//                         width:100% ;
//                         align-items: center;
//                         height: auto;
//                         overflow-wrap: break-word;
    
//                         .channelCommentsSection1{
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                                 margin: 0 20px 0 0;
//                             }
//                         }
//                         .channelCommentsSection2{
//                             width: 100%;
//                             .channelCommentsSection21{
//                                 display: flex;
//                                 align-items: center;
//                                 .channelCommentsSection211{
//                                     margin: 0 20px 0 0;
                                    
//                                 }
//                                 .channelCommentsSection212{
//                                     color: $secondary-text;
//                                 }
//                                 .channelCommentsSection213{
//                                     margin-left: 2rem;
//                                 }
//                                 .commentDropdown{
//                                     position: absolute;
//                                     display: flex;
//                                     flex-direction: column;
//                                     margin-left: 300px;
//                                     button{
//                                         font-size: 10px;
//                                     }
//                                 }
//                             }
//                             &2{
//                                 height: auto;
//                                 width: 100%;
//                                 &1{
//                                     width: 100%;
//                                     word-break: break-word; /* Ensure long words break and wrap */
//                                     overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                                     white-space: normal;
//                                 }
//                             }
//                             .channelCommensSection23{
//                                 display: flex;
//                                 flex-direction: row;
//                                 justify-content: space-between;
//                                 width: 30px;
//                                 align-items: center;
//                                 .channelCommensSection231{
//                                     // color: red;
//                                     .likeIcon{
//                                         color: red;
//                                     }
//                                     .unLikeIcon{
//                                         color:white;
//                                     }
//                                 }
                                
//                                 p{
//                                     color: $secondary-text;
//                                 }
//                             }
//                         }
//                     }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 53vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 9px 15px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 // height: 60vw;
//                 padding: 20px 15px 20vw 0px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 0px;
//                 gap: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 98vw;
//                     height: 75vw;
//                     display: flex;
//                     flex-direction: column;
//                     justify-content: flex-start;
//                     border: 2px solid rgb(45, 45, 45);

//                     // gap: 2px;

//                     padding-right: 0px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
//                     background-color: $hover-bg-color;

//                     &:hover{
//                         transform: scale(1);
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 100%;
//                         height: 47vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 0px;
//                         .watchVideoSection11{
//                             margin: 0 0px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 100%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 18px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 14px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 12px;
//                             }
//                             .dot{
//                                 font-size: 12px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 12px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         position: fixed;
//         left: 0;
//         top:0;
//         width: 100%;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 75%;
//             height: 20%;
//             background-color: black;
//             padding: 10px;
//             display: flex;
//             align-items: center;
//             flex-direction: column;
//             box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             transition: 0.4s;
//             border-radius: 10px;
    
//             &:hover{
//                 transform: scale(0.98);
//             }
//             .editCommentContainer11{
//                 font-size: 20px;
//                 font-weight: 700;
//                 margin-bottom: 10px;
//             }
//             .editCommentContainer12{
//                 width: 100%;
//                 display: flex;
//                 flex-direction: column;
//                 .editCommentContainer121{
//                     font-size: 16px;
//                     font-weight: 600;
//                 }
//                 .editCommentContainer122{
//                     color: black;
//                     border-radius: 5px;
//                     border: 2px solid black;
//                     margin-bottom: 10px;
//                     &:focus{
//                         outline: none;
//                         border-color: red;
//                     }
//                 }
//             }
    
//             .formButtons{
//                 width: 50%;
//                 display: flex;
//                 justify-content: center;
    
//                 &1,&2{
//                     background-color: red;
//                     margin: 5px;
//                     padding: 5px;
//                     border-radius: 5px;
    
//                     &:hover{
//                         background-color: rgba(255, 0, 0, 0.649);
//                     }
//                 }
//             }
//         }
    
//     }
// }


// // @media(max-width:360px){
    
// // }


// // *{
// //     background-color:#0f0f0f;
// // }

// // body{
// //     background-color:#0f0f0f;
// // }
// @import '../../index.scss';

// .box{
//     padding:0vw;
//     width: 99%;
//     height: auto;
//     .SearchBar{
//         position: fixed;
//         height: 56px;
//         width: 100vw;
//         background-color:$background-color;
//         z-index: 100;
//     }
//         .displayer{
//             width: 100%;
//             background-color: aqua;
//         }
//         .left-side2{
//             position: fixed;
//             margin-top: 4%;
        
//             height: 100vh;
//             color: white;
//             background-color:$background-color;
//             z-index: 2;
//         }
//         .left-side {
//             position: fixed;
//             margin-top: 4%;
//             width: 15%;
//             height: 100vh;
//             color: white;
//             background-color:$background-color;
//             z-index: 2;
//         }
//         .right-side-WithNav {
//             // width: 100%;
//             // height: auto;
//             // display: flex;
//             // flex-direction: column;
//             // background-color:$background-color;
            
//         }
//         .right-side-WithoutNav{
//             margin-top:4%;
            
//             width: 100%;
//             height: auto;
//             display: flex;
//             flex-direction: column;
//             background-color:$background-color;
            
//         }
//     }
    
    
//     .watchVideo-container {
//         background-color: $background-color;
//         display: flex;
//         justify-content: space-between;
//         // margin: 20px;
//         margin-top: 5px;
//         height: auto;
    
//         width: 100%;
//         height: 100vh;
    
//         .watchVideo-left-side {
//             width: 68%;
//             height: auto;
//             display: flex;
        
//             flex-direction: column;
//             padding-right: 20px;
//             .subscribeSection{
//                 display: flex;
//                 justify-content: space-between;
//                 padding: 3px;
//                 width: 100%;

//                 .section1{
//                     width: 70%;
//                     display: flex;
//                     justify-content: space-between;
//                     flex-direction: row;
//                     align-items: center;

//                     .section11{
//                         display: flex;
//                         align-items: center;

//                         .section111{
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                             }
//                             margin-right: 4px;
//                         }

//                         .section112{
//                             .ownerName{
//                                 font-size: $base-font-size;
//                                 font-weight: 700;
//                             }
//                             .ownerSubscribers{
//                                 font-size: 12px;
//                                 color: $secondary-text;
//                             }
                            
//                         }
//                     }
//                     .section12{
//                         display: flex;
//                         width: 50%;
//                         justify-content: space-around;
//                         align-items: center;
//                         padding: 3px 3px;
//                         .subscribeButton{
//                             background-color: $button-color;
//                         }
//                         .likeButton{
//                             color: $background-color;
//                             background-color: $secondary-text;
//                             height: 40px;
//                             width: 80px;
//                             border-radius: 20px;
//                             display: flex;
//                             align-items: center;
//                             justify-content: center;
//                             cursor: pointer;
//                             .likeIcon{
//                                 font-size:30px;
//                                 background-color: $secondary-text;
//                                 color: $button-color;
//                                 border-radius: 50%;
//                             }
//                             .unLikeIcon{
//                                 font-size:30px;
//                                 background-color: $secondary-text;
//                                 border-radius: 50%;
//                             }
//                             p{
//                                 margin-left: 4px;
//                                 font-size: 22px;
//                                 font-weight: 700;
//                             }
//                         }
//                     }
//                 }
                
                    
//             }
//             .description{
//                 background-color: $secondary-color;
//                 border-radius: 20px;
//                 margin: 10px 0;
//                 padding: 10px;
//                 .section21{
//                     display: flex;
//                     flex-direction: row;
//                     color: $text-color;
//                     p{
//                         font-size: 14px;
//                         margin:5px 5px 5px 0 ;
//                     }
                    
//                 }
//                 .section22{
//                     .section221{
//                         font-weight: 700;
//                         font-size: 26px;
//                     }
//                     p{
//                         font-size: 22px;
//                     }
//                 }
//             }
//             .commentSection{
//                 display: flex;
//                 flex-direction: row;
//                 padding:10px 10px;
//                 .commentSection1{
//                     margin-right: 10px;
//                     p{
//                         font-size: 20px;
//                         font-weight: 700;
//                     }
//                 }
//                 .commentSection2{
//                     margin-left: 20px;
//                     width: 9%;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: space-between;
//                     align-items: center;
//                 }
//             }
//             .comments{
//                 .comments1{
//                     .comments11{
//                         display: flex;
//                         flex-direction: row;
//                         align-items: center;
//                         width: 100%;
//                         justify-content: space-between;
//                         padding:10px 10px;

//                         img{
//                             width: 45px;
//                             height: 45px;
//                             border-radius: 50%;
//                         }
//                         input{
//                             height: 30px;
//                             width: 60%;
//                             color: black;
//                         }
//                     }
//                     .divider{
//                         width: 100%;
//                         height: 1px;
//                         background-color: white;
//                         margin: 20px 0;
//                     }
//                 }
//             }
//             .channelComments{
//                 display: flex;
//                 flex-direction: column;
//                 padding: 10px 10px;
//                 width: 100%;
//                 .channelCommentsSection{
//                     display: flex;
//                     flex-direction: row;
//                     padding: 10px 0;
//                     width:100% ;
//                     align-items: center;
//                     height: auto;
//                     overflow-wrap: break-word;

//                     .channelCommentsSection1{
//                         img{
//                             width: 45px;
//                             height: 45px;
//                             border-radius: 50%;
//                             margin: 0 20px 0 0;
//                         }
//                     }
//                     .channelCommentsSection2{
//                         width: 100%;
//                         .channelCommentsSection21{
//                             display: flex;
//                             align-items: center;
//                             .channelCommentsSection211{
//                                 margin: 0 20px 0 0;
                                
//                             }
//                             .channelCommentsSection212{
//                                 color: $secondary-text;
//                             }
//                             .channelCommentsSection213{
//                                 margin-left: 2rem;
//                             }
//                             .commentDropdown{
//                                 position: absolute;
//                                 display: flex;
//                                 flex-direction: column;
//                                 margin-left: 300px;
//                                 button{
//                                     font-size: 10px;
//                                 }
//                             }
//                         }
//                         &2{
//                             height: auto;
//                             width: 100%;
//                             &1{
//                                 width: 100%;
//                                 word-break: break-word; /* Ensure long words break and wrap */
//                                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                                 white-space: normal;
//                             }
//                         }
//                         .channelCommensSection23{
//                             display: flex;
//                             flex-direction: row;
//                             justify-content: space-between;
//                             width: 30px;
//                             align-items: center;
//                             .channelCommensSection231{
//                                 // color: red;
//                                 .likeIcon{
//                                     color: red;
//                                 }
//                                 .unLikeIcon{
//                                     color:white;
//                                 }
//                             }
                            
//                             p{
//                                 color: $secondary-text;
//                             }
//                         }
//                     }
//                 }
//             }
            

//             video {
//                 width: 100%;
//                 border-radius: 20px;
//                 height: 35vw;
//                 // pointer-events: none;
//             }
    
//             button {
//                 margin-top: 10px;
//                 padding: 10px 20px;
//                 background-color: #4a4a4a;
//                 color: white;
//                 border: none;
//                 border-radius: 5px;
//                 cursor: pointer;
    
//                 &:hover {
//                     background-color: #6a6a6a;
//                 }
//             }
    
//             .video-title {
//                 width: 100%;
//                 color: white;
//                 font-weight: bold;
//                 font-size: 1.3rem;
//                 margin-top: 10px;
//             }
//         }
    
//         .watchVideo-right-side {
//             width: 30%;
//             display: flex;
//             flex-direction: column;
//             margin-right: 5px;
//             color: $text-color;
//             font-size: $base-font-size;
//             background-color: $background-color;
//             height: auto;
//             align-items: center;
//             .watchVideoSection{
//                 width: 50vh;
//                 display: flex;
//                 flex-direction: row;
//                 justify-content: space-between;
//                 padding: 5px;
//                 transition-duration: 0.5s;
//                 border-radius: 10px;

//                 &:hover{
//                     transform: scale(0.98);
//                     background-color: $hover-bg-color;
//                     box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                 }
//                 .watchVideoSection1{
//                     width: 45%;
//                     height: 15vh;
//                     display: flex;
//                     align-items: center;
//                     .watchVideoSection11{
//                         margin: 0 6px 0 0 ;
//                         width: 100%;
//                         height: 100%;
//                         border-radius: 5px;
//                         // object-fit:cover;
//                     }
//                 }
//                 .watchVideoSection2{
//                     width: 50%;
//                     .watchVideoSection21{
//                         .watchVideoSection211{
//                             font-size: 14px;
//                             font-weight: 700;
//                         }
//                     }
//                     .watchVideoSection22{
//                         margin-top: 5px;
//                         .watchVideoSection221{
//                             font-size: 13px;
//                             color: $secondary-text;
//                         }
//                     }
//                     .watchVideoSection23{
//                         display: flex;
//                         flex-direction: row;
//                         font-size: 12px;
//                         color: $secondary-text;
//                         .views{
//                             font-size: 12px;
//                         }
//                         .dot{
//                             font-size: 12px;
//                         }
//                         .time{
//                             font-size: 12px;
//                         }
//                     }
//                 }
//             }
//         }
    
//     }

// .editCommentContainer{
//     position: fixed;
//     left: 0;
//     top:0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: rgba(0, 0, 0, 0.571);
    
    
//     .editCommentContainer1{
//         width: 35%;
//         height: 25%;
//         background-color: black;
//         padding: 10px;
//         display: flex;
//         align-items: center;
//         flex-direction: column;
//         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//         transition: 0.4s;
//         border-radius: 10px;

//         &:hover{
//             transform: scale(0.98);
//         }
//         .editCommentContainer11{
//             font-size: 20px;
//             font-weight: 700;
//             margin-bottom: 10px;
//         }
//         .editCommentContainer12{
//             width: 100%;
//             display: flex;
//             flex-direction: column;
//             .editCommentContainer121{
//                 font-size: 16px;
//                 font-weight: 600;
//             }
//             .editCommentContainer122{
//                 color: black;
//                 border-radius: 5px;
//                 border: 2px solid black;
//                 margin-bottom: 10px;
//                 &:focus{
//                     outline: none;
//                     border-color: red;
//                 }
//             }
//         }

//         .formButtons{
//             width: 50%;
//             display: flex;
//             justify-content: center;

//             &1,&2{
//                 background-color: red;
//                 margin: 5px;
//                 padding: 5px;
//                 border-radius: 5px;

//                 &:hover{
//                     background-color: rgba(255, 0, 0, 0.649);
//                 }
//             }
//         }
//     }

// }


// @media(max-width:1280px){
//     .box{
//         padding:0vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             // position: fixed;
//             // height: 56px;
//             // width: 100vw;
//             // background-color:$background-color;
//             // z-index: 100;
//         }
//             // .displayer{
//             //     width: 100%;
//             //     background-color: aqua;
//             // }
//             // .left-side2{
//             //     position: fixed;
//             //     margin-top: 4%;
            
//             //     height: 100vh;
//             //     color: white;
//             //     background-color:$background-color;
//             //     z-index: 2;
//             // }
//             // .left-side {
//             //     position: fixed;
//             //     margin-top: 4%;
//             //     width: 15%;
//             //     height: 100vh;
//             //     color: white;
//             //     background-color:$background-color;
//             //     z-index: 2;
//             // }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 // margin-top:4%;
                
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             // // margin: 20px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 45vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     // background-color: #4a4a4a;
//                     // color: white;
//                     // border: none;
//                     // border-radius: 5px;
//                     // cursor: pointer;
        
//                     // &:hover {
//                     //     background-color: #6a6a6a;
//                     // }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     // color: white;
//                     // font-weight: bold;
//                     // font-size: 1.3rem;
//                     // margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 0;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 // color: $text-color;
//                 // font-size: $base-font-size;
//                 // background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 80vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
    
//                     // &:hover{
//                     //     transform: scale(0.98);
//                     //     background-color: $hover-bg-color;
//                     //     box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     // }
//                     .watchVideoSection1{
//                         width: 30%;
//                         height: 15vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 60%;
//                         .watchVideoSection21{
//                             // .watchVideoSection211{
//                             //     font-size: 26px;
//                             //     font-weight: 700;
//                             // }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             // .watchVideoSection221{
//                             //     font-size: 18px;
//                             //     color: $secondary-text;
//                             // }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             // color: $secondary-text;
//                             .views{
//                                 font-size: 14px;
//                             }
//                             .dot{
//                                 font-size: 14px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 14px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     // .editCommentContainer{
//     //     position: fixed;
//     //     left: 0;
//     //     top:0;
//     //     width: 100%;
//     //     height: 100%;
//     //     display: flex;
//     //     align-items: center;
//     //     justify-content: center;
//     //     background-color: rgba(0, 0, 0, 0.571);
        
        
//     //     .editCommentContainer1{
//     //         width: 35%;
//     //         height: 20%;
//     //         background-color: black;
//     //         padding: 10px;
//     //         display: flex;
//     //         align-items: center;
//     //         flex-direction: column;
//     //         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//     //         transition: 0.4s;
//     //         border-radius: 10px;
    
//     //         &:hover{
//     //             transform: scale(0.98);
//     //         }
//     //         .editCommentContainer11{
//     //             font-size: 20px;
//     //             font-weight: 700;
//     //             margin-bottom: 10px;
//     //         }
//     //         .editCommentContainer12{
//     //             width: 100%;
//     //             display: flex;
//     //             flex-direction: column;
//     //             .editCommentContainer121{
//     //                 font-size: 16px;
//     //                 font-weight: 600;
//     //             }
//     //             .editCommentContainer122{
//     //                 color: black;
//     //                 border-radius: 5px;
//     //                 border: 2px solid black;
//     //                 margin-bottom: 10px;
//     //                 &:focus{
//     //                     outline: none;
//     //                     border-color: red;
//     //                 }
//     //             }
//     //         }
    
//     //         .formButtons{
//     //             width: 50%;
//     //             display: flex;
//     //             justify-content: center;
    
//     //             &1,&2{
//     //                 background-color: red;
//     //                 margin: 5px;
//     //                 padding: 5px;
//     //                 border-radius: 5px;
    
//     //                 &:hover{
//     //                     background-color: rgba(255, 0, 0, 0.649);
//     //                 }
//     //             }
//     //         }
//     //     }
    
//     // }
// }

// @media(max-width:1024px){
//     video {
//         width: 100%;
//         border-radius: 20px;
//         height: 55vw;
//         // pointer-events: none;
//     }
// }

// @media(max-width:767px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 40px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 55vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 100px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 80vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
    
//                     &:hover{
//                         transform: scale(0.98);
//                         background-color: $hover-bg-color;
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 30%;
//                         height: 15vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 60%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 22px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 16px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 14px;
//                             }
//                             .dot{
//                                 font-size: 14px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 14px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         // position: fixed;
//         // left: 0;
//         // top:0;
//         // width: 100%;
//         // height: 100%;
//         // display: flex;
//         // align-items: center;
//         // justify-content: center;
//         // background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 45%;
//             height: 18%;
//             // background-color: black;
//             // padding: 10px;
//             // display: flex;
//             // align-items: center;
//             // flex-direction: column;
//             // box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             // transition: 0.4s;
//             // border-radius: 10px;
    
//             // &:hover{
//             //     transform: scale(0.98);
//             // }
//             // .editCommentContainer11{
//             //     font-size: 20px;
//             //     font-weight: 700;
//             //     margin-bottom: 10px;
//             // }
//             // .editCommentContainer12{
//             //     width: 100%;
//             //     display: flex;
//             //     flex-direction: column;
//             //     .editCommentContainer121{
//             //         font-size: 16px;
//             //         font-weight: 600;
//             //     }
//             //     .editCommentContainer122{
//             //         color: black;
//             //         border-radius: 5px;
//             //         border: 2px solid black;
//             //         margin-bottom: 10px;
//             //         &:focus{
//             //             outline: none;
//             //             border-color: red;
//             //         }
//             //     }
//             // }
    
//             // .formButtons{
//             //     width: 50%;
//             //     display: flex;
//             //     justify-content: center;
    
//             //     &1,&2{
//             //         background-color: red;
//             //         margin: 5px;
//             //         padding: 5px;
//             //         border-radius: 5px;
    
//             //         &:hover{
//             //             background-color: rgba(255, 0, 0, 0.649);
//             //         }
//             //     }
//             // }
//         }
    
//     }
// }

// @media(max-width:600px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 10px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 55vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 10px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 gap: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 95vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;
//                     border: 2px solid rgb(45, 45, 45);

//                     // gap: 2px;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
//                     background-color: $hover-bg-color;

//                     &:hover{
//                         transform: scale(1);
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 50%;
//                         height: 25vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 50%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 18px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 14px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 12px;
//                             }
//                             .dot{
//                                 font-size: 12px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 12px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         position: fixed;
//         left: 0;
//         top:0;
//         width: 100%;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 65%;
//             height: 25%;
//             background-color: black;
//             padding: 10px;
//             display: flex;
//             align-items: center;
//             flex-direction: column;
//             box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             transition: 0.4s;
//             border-radius: 10px;
    
//             &:hover{
//                 transform: scale(0.98);
//             }
//             .editCommentContainer11{
//                 font-size: 20px;
//                 font-weight: 700;
//                 margin-bottom: 10px;
//             }
//             .editCommentContainer12{
//                 width: 100%;
//                 display: flex;
//                 flex-direction: column;
//                 .editCommentContainer121{
//                     font-size: 16px;
//                     font-weight: 600;
//                 }
//                 .editCommentContainer122{
//                     color: black;
//                     border-radius: 5px;
//                     border: 2px solid black;
//                     margin-bottom: 10px;
//                     &:focus{
//                         outline: none;
//                         border-color: red;
//                     }
//                 }
//             }
    
//             .formButtons{
//                 width: 50%;
//                 display: flex;
//                 justify-content: center;
    
//                 &1,&2{
//                     background-color: red;
//                     margin: 5px;
//                     padding: 5px;
//                     border-radius: 5px;
    
//                     &:hover{
//                         background-color: rgba(255, 0, 0, 0.649);
//                     }
//                 }
//             }
//         }
    
//     }
// }

// @media(max-width:500px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 10px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 flex-direction: column;
//                 padding-right: 20px;
//                 .subscribeSection{
//                     display: flex;
//                     justify-content: space-between;
//                     padding: 3px;
//                     width: 100%;
    
//                     .section1{
//                         width: 100%;
//                         display: flex;
//                         justify-content: space-between;
//                         flex-direction: row;
//                         align-items: center;
    
//                         .section11{
//                             display: flex;
//                             align-items: center;
    
//                             .section111{
//                                 img{
//                                     width: 45px;
//                                     height: 45px;
//                                     border-radius: 50%;
//                                 }
//                                 margin-right: 4px;
//                             }
    
//                             .section112{
//                                 .ownerName{
//                                     font-size: $base-font-size;
//                                     font-weight: 700;
//                                 }
//                                 .ownerSubscribers{
//                                     font-size: 12px;
//                                     color: $secondary-text;
//                                 }
                                
//                             }
//                         }
//                         .section12{
//                             display: flex;
//                             width: 50%;
//                             justify-content: space-around;
//                             align-items: center;
//                             padding: 3px 3px;
//                             .subscribeButton{
//                                 background-color: $button-color;
//                             }
//                             .likeButton{
//                                 color: $background-color;
//                                 background-color: $secondary-text;
//                                 height: 40px;
//                                 width: 70px;
//                                 border-radius: 20px;
//                                 display: flex;
//                                 align-items: center;
//                                 justify-content: center;
//                                 cursor: pointer;
//                                 .likeIcon{
//                                     font-size:30px;
//                                     background-color: $secondary-text;
//                                     color: $button-color;
//                                     border-radius: 50%;
//                                 }
//                                 .unLikeIcon{
//                                     font-size:30px;
//                                     background-color: $secondary-text;
//                                     border-radius: 50%;
//                                 }
//                                 p{
//                                     margin-left: 4px;
//                                     font-size: 22px;
//                                     font-weight: 700;
//                                 }
//                             }
//                         }
//                     }
                    
                        
//                 }
//                 .description{
//                     background-color: $secondary-color;
//                     border-radius: 20px;
//                     margin: 10px 0;
//                     padding: 10px;
//                     .section21{
//                         display: flex;
//                         flex-direction: row;
//                         color: $text-color;
//                         p{
//                             font-size: 14px;
//                             margin:5px 5px 5px 0 ;
//                         }
                        
//                     }
//                     .section22{
//                         .section221{
//                             font-weight: 700;
//                             font-size: 26px;
//                         }
//                         p{
//                             font-size: 18px;
//                         }
//                     }
//                 }
//                 .commentSection{
//                     display: flex;
//                     flex-direction: row;
//                     padding:10px 10px;
//                     .commentSection1{
//                         margin-right: 10px;
//                         p{
//                             font-size: 20px;
//                             font-weight: 700;
//                         }
//                     }
//                     .commentSection2{
//                         margin-left: 20px;
//                         width: 20%;
//                         display: flex;
//                         flex-direction: row;
//                         justify-content: space-between;
//                         align-items: center;
//                     }
//                 }
//                 .comments{
//                     .comments1{
                        

//                         .comments11{
//                             display: flex;
//                             flex-direction: row;
//                             align-items: center;
//                             width: 100%;
//                             justify-content: space-between;
//                             padding:10px 10px;
    
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                             }
//                             input{
//                                 height: 35px;
//                                 width: 40%;
//                                 color: black;
//                             }
//                         }
//                         .divider{
//                             width: 100%;
//                             height: 1px;
//                             background-color: white;
//                             margin: 20px 0;
//                         }
//                     }
//                 }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     .channelCommentsSection{
//                         display: flex;
//                         flex-direction: row;
//                         padding: 10px 0;
//                         width:100% ;
//                         align-items: center;
//                         height: auto;
//                         overflow-wrap: break-word;
    
//                         .channelCommentsSection1{
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                                 margin: 0 20px 0 0;
//                             }
//                         }
//                         .channelCommentsSection2{
//                             width: 100%;
//                             .channelCommentsSection21{
//                                 display: flex;
//                                 align-items: center;
//                                 .channelCommentsSection211{
//                                     margin: 0 20px 0 0;
                                    
//                                 }
//                                 .channelCommentsSection212{
//                                     color: $secondary-text;
//                                 }
//                                 .channelCommentsSection213{
//                                     margin-left: 2rem;
//                                 }
//                                 .commentDropdown{
//                                     position: absolute;
//                                     display: flex;
//                                     flex-direction: column;
//                                     margin-left: 300px;
//                                     button{
//                                         font-size: 10px;
//                                     }
//                                 }
//                             }
//                             &2{
//                                 height: auto;
//                                 width: 100%;
//                                 &1{
//                                     width: 100%;
//                                     word-break: break-word; /* Ensure long words break and wrap */
//                                     overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                                     white-space: normal;
//                                 }
//                             }
//                             .channelCommensSection23{
//                                 display: flex;
//                                 flex-direction: row;
//                                 justify-content: space-between;
//                                 width: 30px;
//                                 align-items: center;
//                                 .channelCommensSection231{
//                                     // color: red;
//                                     .likeIcon{
//                                         color: red;
//                                     }
//                                     .unLikeIcon{
//                                         color:white;
//                                     }
//                                 }
                                
//                                 p{
//                                     color: $secondary-text;
//                                 }
//                             }
//                         }
//                     }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 53vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 9px 15px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 // height: 60vw;
//                 padding: 20px 15px 20vw 0px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 0px;
//                 gap: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 98vw;
//                     height: 75vw;
//                     display: flex;
//                     flex-direction: column;
//                     justify-content: flex-start;
//                     border: 2px solid rgb(45, 45, 45);

//                     // gap: 2px;

//                     padding-right: 0px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
//                     background-color: $hover-bg-color;

//                     &:hover{
//                         transform: scale(1);
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 100%;
//                         height: 47vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 0px;
//                         .watchVideoSection11{
//                             margin: 0 0px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 100%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 18px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 14px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 12px;
//                             }
//                             .dot{
//                                 font-size: 12px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 12px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         position: fixed;
//         left: 0;
//         top:0;
//         width: 100%;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 75%;
//             height: 20%;
//             background-color: black;
//             padding: 10px;
//             display: flex;
//             align-items: center;
//             flex-direction: column;
//             box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             transition: 0.4s;
//             border-radius: 10px;
    
//             &:hover{
//                 transform: scale(0.98);
//             }
//             .editCommentContainer11{
//                 font-size: 20px;
//                 font-weight: 700;
//                 margin-bottom: 10px;
//             }
//             .editCommentContainer12{
//                 width: 100%;
//                 display: flex;
//                 flex-direction: column;
//                 .editCommentContainer121{
//                     font-size: 16px;
//                     font-weight: 600;
//                 }
//                 .editCommentContainer122{
//                     color: black;
//                     border-radius: 5px;
//                     border: 2px solid black;
//                     margin-bottom: 10px;
//                     &:focus{
//                         outline: none;
//                         border-color: red;
//                     }
//                 }
//             }
    
//             .formButtons{
//                 width: 50%;
//                 display: flex;
//                 justify-content: center;
    
//                 &1,&2{
//                     background-color: red;
//                     margin: 5px;
//                     padding: 5px;
//                     border-radius: 5px;
    
//                     &:hover{
//                         background-color: rgba(255, 0, 0, 0.649);
//                     }
//                 }
//             }
//         }
    
//     }
// }


// // @media(max-width:360px){
    
// // }


// // *{
// //     background-color:#0f0f0f;
// // }

// // body{
// //     background-color:#0f0f0f;
// // }
// @import '../../index.scss';

// .box{
//     padding:0vw;
//     width: 99%;
//     height: auto;
//     .SearchBar{
//         position: fixed;
//         height: 56px;
//         width: 100vw;
//         background-color:$background-color;
//         z-index: 100;
//     }
//         .displayer{
//             width: 100%;
//             background-color: aqua;
//         }
//         .left-side2{
//             position: fixed;
//             margin-top: 4%;
        
//             height: 100vh;
//             color: white;
//             background-color:$background-color;
//             z-index: 2;
//         }
//         .left-side {
//             position: fixed;
//             margin-top: 4%;
//             width: 15%;
//             height: 100vh;
//             color: white;
//             background-color:$background-color;
//             z-index: 2;
//         }
//         .right-side-WithNav {
//             // width: 100%;
//             // height: auto;
//             // display: flex;
//             // flex-direction: column;
//             // background-color:$background-color;
            
//         }
//         .right-side-WithoutNav{
//             margin-top:4%;
            
//             width: 100%;
//             height: auto;
//             display: flex;
//             flex-direction: column;
//             background-color:$background-color;
            
//         }
//     }
    
    
//     .watchVideo-container {
//         background-color: $background-color;
//         display: flex;
//         justify-content: space-between;
//         // margin: 20px;
//         margin-top: 5px;
//         height: auto;
    
//         width: 100%;
//         height: 100vh;
    
//         .watchVideo-left-side {
//             width: 68%;
//             height: auto;
//             display: flex;
        
//             flex-direction: column;
//             padding-right: 20px;
//             .subscribeSection{
//                 display: flex;
//                 justify-content: space-between;
//                 padding: 3px;
//                 width: 100%;

//                 .section1{
//                     width: 70%;
//                     display: flex;
//                     justify-content: space-between;
//                     flex-direction: row;
//                     align-items: center;

//                     .section11{
//                         display: flex;
//                         align-items: center;

//                         .section111{
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                             }
//                             margin-right: 4px;
//                         }

//                         .section112{
//                             .ownerName{
//                                 font-size: $base-font-size;
//                                 font-weight: 700;
//                             }
//                             .ownerSubscribers{
//                                 font-size: 12px;
//                                 color: $secondary-text;
//                             }
                            
//                         }
//                     }
//                     .section12{
//                         display: flex;
//                         width: 50%;
//                         justify-content: space-around;
//                         align-items: center;
//                         padding: 3px 3px;
//                         .subscribeButton{
//                             background-color: $button-color;
//                         }
//                         .likeButton{
//                             color: $background-color;
//                             background-color: $secondary-text;
//                             height: 40px;
//                             width: 80px;
//                             border-radius: 20px;
//                             display: flex;
//                             align-items: center;
//                             justify-content: center;
//                             cursor: pointer;
//                             .likeIcon{
//                                 font-size:30px;
//                                 background-color: $secondary-text;
//                                 color: $button-color;
//                                 border-radius: 50%;
//                             }
//                             .unLikeIcon{
//                                 font-size:30px;
//                                 background-color: $secondary-text;
//                                 border-radius: 50%;
//                             }
//                             p{
//                                 margin-left: 4px;
//                                 font-size: 22px;
//                                 font-weight: 700;
//                             }
//                         }
//                     }
//                 }
                
                    
//             }
//             .description{
//                 background-color: $secondary-color;
//                 border-radius: 20px;
//                 margin: 10px 0;
//                 padding: 10px;
//                 .section21{
//                     display: flex;
//                     flex-direction: row;
//                     color: $text-color;
//                     p{
//                         font-size: 14px;
//                         margin:5px 5px 5px 0 ;
//                     }
                    
//                 }
//                 .section22{
//                     .section221{
//                         font-weight: 700;
//                         font-size: 26px;
//                     }
//                     p{
//                         font-size: 22px;
//                     }
//                 }
//             }
//             .commentSection{
//                 display: flex;
//                 flex-direction: row;
//                 padding:10px 10px;
//                 .commentSection1{
//                     margin-right: 10px;
//                     p{
//                         font-size: 20px;
//                         font-weight: 700;
//                     }
//                 }
//                 .commentSection2{
//                     margin-left: 20px;
//                     width: 9%;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: space-between;
//                     align-items: center;
//                 }
//             }
//             .comments{
//                 .comments1{
//                     .comments11{
//                         display: flex;
//                         flex-direction: row;
//                         align-items: center;
//                         width: 100%;
//                         justify-content: space-between;
//                         padding:10px 10px;

//                         img{
//                             width: 45px;
//                             height: 45px;
//                             border-radius: 50%;
//                         }
//                         input{
//                             height: 30px;
//                             width: 60%;
//                             color: black;
//                         }
//                     }
//                     .divider{
//                         width: 100%;
//                         height: 1px;
//                         background-color: white;
//                         margin: 20px 0;
//                     }
//                 }
//             }
//             .channelComments{
//                 display: flex;
//                 flex-direction: column;
//                 padding: 10px 10px;
//                 width: 100%;
//                 .channelCommentsSection{
//                     display: flex;
//                     flex-direction: row;
//                     padding: 10px 0;
//                     width:100% ;
//                     align-items: center;
//                     height: auto;
//                     overflow-wrap: break-word;

//                     .channelCommentsSection1{
//                         img{
//                             width: 45px;
//                             height: 45px;
//                             border-radius: 50%;
//                             margin: 0 20px 0 0;
//                         }
//                     }
//                     .channelCommentsSection2{
//                         width: 100%;
//                         .channelCommentsSection21{
//                             display: flex;
//                             align-items: center;
//                             .channelCommentsSection211{
//                                 margin: 0 20px 0 0;
                                
//                             }
//                             .channelCommentsSection212{
//                                 color: $secondary-text;
//                             }
//                             .channelCommentsSection213{
//                                 margin-left: 2rem;
//                             }
//                             .commentDropdown{
//                                 position: absolute;
//                                 display: flex;
//                                 flex-direction: column;
//                                 margin-left: 300px;
//                                 button{
//                                     font-size: 10px;
//                                 }
//                             }
//                         }
//                         &2{
//                             height: auto;
//                             width: 100%;
//                             &1{
//                                 width: 100%;
//                                 word-break: break-word; /* Ensure long words break and wrap */
//                                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                                 white-space: normal;
//                             }
//                         }
//                         .channelCommensSection23{
//                             display: flex;
//                             flex-direction: row;
//                             justify-content: space-between;
//                             width: 30px;
//                             align-items: center;
//                             .channelCommensSection231{
//                                 // color: red;
//                                 .likeIcon{
//                                     color: red;
//                                 }
//                                 .unLikeIcon{
//                                     color:white;
//                                 }
//                             }
                            
//                             p{
//                                 color: $secondary-text;
//                             }
//                         }
//                     }
//                 }
//             }
            

//             video {
//                 width: 100%;
//                 border-radius: 20px;
//                 height: 35vw;
//                 // pointer-events: none;
//             }
    
//             button {
//                 margin-top: 10px;
//                 padding: 10px 20px;
//                 background-color: #4a4a4a;
//                 color: white;
//                 border: none;
//                 border-radius: 5px;
//                 cursor: pointer;
    
//                 &:hover {
//                     background-color: #6a6a6a;
//                 }
//             }
    
//             .video-title {
//                 width: 100%;
//                 color: white;
//                 font-weight: bold;
//                 font-size: 1.3rem;
//                 margin-top: 10px;
//             }
//         }
    
//         .watchVideo-right-side {
//             width: 30%;
//             display: flex;
//             flex-direction: column;
//             margin-right: 5px;
//             color: $text-color;
//             font-size: $base-font-size;
//             background-color: $background-color;
//             height: auto;
//             align-items: center;
//             .watchVideoSection{
//                 width: 50vh;
//                 display: flex;
//                 flex-direction: row;
//                 justify-content: space-between;
//                 padding: 5px;
//                 transition-duration: 0.5s;
//                 border-radius: 10px;

//                 &:hover{
//                     transform: scale(0.98);
//                     background-color: $hover-bg-color;
//                     box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                 }
//                 .watchVideoSection1{
//                     width: 45%;
//                     height: 15vh;
//                     display: flex;
//                     align-items: center;
//                     .watchVideoSection11{
//                         margin: 0 6px 0 0 ;
//                         width: 100%;
//                         height: 100%;
//                         border-radius: 5px;
//                         // object-fit:cover;
//                     }
//                 }
//                 .watchVideoSection2{
//                     width: 50%;
//                     .watchVideoSection21{
//                         .watchVideoSection211{
//                             font-size: 14px;
//                             font-weight: 700;
//                         }
//                     }
//                     .watchVideoSection22{
//                         margin-top: 5px;
//                         .watchVideoSection221{
//                             font-size: 13px;
//                             color: $secondary-text;
//                         }
//                     }
//                     .watchVideoSection23{
//                         display: flex;
//                         flex-direction: row;
//                         font-size: 12px;
//                         color: $secondary-text;
//                         .views{
//                             font-size: 12px;
//                         }
//                         .dot{
//                             font-size: 12px;
//                         }
//                         .time{
//                             font-size: 12px;
//                         }
//                     }
//                 }
//             }
//         }
    
//     }

// .editCommentContainer{
//     position: fixed;
//     left: 0;
//     top:0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: rgba(0, 0, 0, 0.571);
    
    
//     .editCommentContainer1{
//         width: 35%;
//         height: 25%;
//         background-color: black;
//         padding: 10px;
//         display: flex;
//         align-items: center;
//         flex-direction: column;
//         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//         transition: 0.4s;
//         border-radius: 10px;

//         &:hover{
//             transform: scale(0.98);
//         }
//         .editCommentContainer11{
//             font-size: 20px;
//             font-weight: 700;
//             margin-bottom: 10px;
//         }
//         .editCommentContainer12{
//             width: 100%;
//             display: flex;
//             flex-direction: column;
//             .editCommentContainer121{
//                 font-size: 16px;
//                 font-weight: 600;
//             }
//             .editCommentContainer122{
//                 color: black;
//                 border-radius: 5px;
//                 border: 2px solid black;
//                 margin-bottom: 10px;
//                 &:focus{
//                     outline: none;
//                     border-color: red;
//                 }
//             }
//         }

//         .formButtons{
//             width: 50%;
//             display: flex;
//             justify-content: center;

//             &1,&2{
//                 background-color: red;
//                 margin: 5px;
//                 padding: 5px;
//                 border-radius: 5px;

//                 &:hover{
//                     background-color: rgba(255, 0, 0, 0.649);
//                 }
//             }
//         }
//     }

// }


// @media(max-width:1280px){
//     .box{
//         padding:0vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             // position: fixed;
//             // height: 56px;
//             // width: 100vw;
//             // background-color:$background-color;
//             // z-index: 100;
//         }
//             // .displayer{
//             //     width: 100%;
//             //     background-color: aqua;
//             // }
//             // .left-side2{
//             //     position: fixed;
//             //     margin-top: 4%;
            
//             //     height: 100vh;
//             //     color: white;
//             //     background-color:$background-color;
//             //     z-index: 2;
//             // }
//             // .left-side {
//             //     position: fixed;
//             //     margin-top: 4%;
//             //     width: 15%;
//             //     height: 100vh;
//             //     color: white;
//             //     background-color:$background-color;
//             //     z-index: 2;
//             // }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 // margin-top:4%;
                
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             // // margin: 20px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 45vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     // background-color: #4a4a4a;
//                     // color: white;
//                     // border: none;
//                     // border-radius: 5px;
//                     // cursor: pointer;
        
//                     // &:hover {
//                     //     background-color: #6a6a6a;
//                     // }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     // color: white;
//                     // font-weight: bold;
//                     // font-size: 1.3rem;
//                     // margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 0;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 // color: $text-color;
//                 // font-size: $base-font-size;
//                 // background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 80vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
    
//                     // &:hover{
//                     //     transform: scale(0.98);
//                     //     background-color: $hover-bg-color;
//                     //     box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     // }
//                     .watchVideoSection1{
//                         width: 30%;
//                         height: 15vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 60%;
//                         .watchVideoSection21{
//                             // .watchVideoSection211{
//                             //     font-size: 26px;
//                             //     font-weight: 700;
//                             // }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             // .watchVideoSection221{
//                             //     font-size: 18px;
//                             //     color: $secondary-text;
//                             // }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             // color: $secondary-text;
//                             .views{
//                                 font-size: 14px;
//                             }
//                             .dot{
//                                 font-size: 14px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 14px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     // .editCommentContainer{
//     //     position: fixed;
//     //     left: 0;
//     //     top:0;
//     //     width: 100%;
//     //     height: 100%;
//     //     display: flex;
//     //     align-items: center;
//     //     justify-content: center;
//     //     background-color: rgba(0, 0, 0, 0.571);
        
        
//     //     .editCommentContainer1{
//     //         width: 35%;
//     //         height: 20%;
//     //         background-color: black;
//     //         padding: 10px;
//     //         display: flex;
//     //         align-items: center;
//     //         flex-direction: column;
//     //         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//     //         transition: 0.4s;
//     //         border-radius: 10px;
    
//     //         &:hover{
//     //             transform: scale(0.98);
//     //         }
//     //         .editCommentContainer11{
//     //             font-size: 20px;
//     //             font-weight: 700;
//     //             margin-bottom: 10px;
//     //         }
//     //         .editCommentContainer12{
//     //             width: 100%;
//     //             display: flex;
//     //             flex-direction: column;
//     //             .editCommentContainer121{
//     //                 font-size: 16px;
//     //                 font-weight: 600;
//     //             }
//     //             .editCommentContainer122{
//     //                 color: black;
//     //                 border-radius: 5px;
//     //                 border: 2px solid black;
//     //                 margin-bottom: 10px;
//     //                 &:focus{
//     //                     outline: none;
//     //                     border-color: red;
//     //                 }
//     //             }
//     //         }
    
//     //         .formButtons{
//     //             width: 50%;
//     //             display: flex;
//     //             justify-content: center;
    
//     //             &1,&2{
//     //                 background-color: red;
//     //                 margin: 5px;
//     //                 padding: 5px;
//     //                 border-radius: 5px;
    
//     //                 &:hover{
//     //                     background-color: rgba(255, 0, 0, 0.649);
//     //                 }
//     //             }
//     //         }
//     //     }
    
//     // }
// }

// @media(max-width:1024px){
//     video {
//         width: 100%;
//         border-radius: 20px;
//         height: 55vw;
//         // pointer-events: none;
//     }
// }

// @media(max-width:767px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 40px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 55vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 100px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 80vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
    
//                     &:hover{
//                         transform: scale(0.98);
//                         background-color: $hover-bg-color;
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 30%;
//                         height: 15vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 60%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 22px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 16px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 14px;
//                             }
//                             .dot{
//                                 font-size: 14px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 14px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         // position: fixed;
//         // left: 0;
//         // top:0;
//         // width: 100%;
//         // height: 100%;
//         // display: flex;
//         // align-items: center;
//         // justify-content: center;
//         // background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 45%;
//             height: 18%;
//             // background-color: black;
//             // padding: 10px;
//             // display: flex;
//             // align-items: center;
//             // flex-direction: column;
//             // box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             // transition: 0.4s;
//             // border-radius: 10px;
    
//             // &:hover{
//             //     transform: scale(0.98);
//             // }
//             // .editCommentContainer11{
//             //     font-size: 20px;
//             //     font-weight: 700;
//             //     margin-bottom: 10px;
//             // }
//             // .editCommentContainer12{
//             //     width: 100%;
//             //     display: flex;
//             //     flex-direction: column;
//             //     .editCommentContainer121{
//             //         font-size: 16px;
//             //         font-weight: 600;
//             //     }
//             //     .editCommentContainer122{
//             //         color: black;
//             //         border-radius: 5px;
//             //         border: 2px solid black;
//             //         margin-bottom: 10px;
//             //         &:focus{
//             //             outline: none;
//             //             border-color: red;
//             //         }
//             //     }
//             // }
    
//             // .formButtons{
//             //     width: 50%;
//             //     display: flex;
//             //     justify-content: center;
    
//             //     &1,&2{
//             //         background-color: red;
//             //         margin: 5px;
//             //         padding: 5px;
//             //         border-radius: 5px;
    
//             //         &:hover{
//             //             background-color: rgba(255, 0, 0, 0.649);
//             //         }
//             //     }
//             // }
//         }
    
//     }
// }

// @media(max-width:600px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 10px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 55vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 10px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 gap: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 95vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;
//                     border: 2px solid rgb(45, 45, 45);

//                     // gap: 2px;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
//                     background-color: $hover-bg-color;

//                     &:hover{
//                         transform: scale(1);
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 50%;
//                         height: 25vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 50%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 18px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 14px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 12px;
//                             }
//                             .dot{
//                                 font-size: 12px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 12px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         position: fixed;
//         left: 0;
//         top:0;
//         width: 100%;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 65%;
//             height: 25%;
//             background-color: black;
//             padding: 10px;
//             display: flex;
//             align-items: center;
//             flex-direction: column;
//             box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             transition: 0.4s;
//             border-radius: 10px;
    
//             &:hover{
//                 transform: scale(0.98);
//             }
//             .editCommentContainer11{
//                 font-size: 20px;
//                 font-weight: 700;
//                 margin-bottom: 10px;
//             }
//             .editCommentContainer12{
//                 width: 100%;
//                 display: flex;
//                 flex-direction: column;
//                 .editCommentContainer121{
//                     font-size: 16px;
//                     font-weight: 600;
//                 }
//                 .editCommentContainer122{
//                     color: black;
//                     border-radius: 5px;
//                     border: 2px solid black;
//                     margin-bottom: 10px;
//                     &:focus{
//                         outline: none;
//                         border-color: red;
//                     }
//                 }
//             }
    
//             .formButtons{
//                 width: 50%;
//                 display: flex;
//                 justify-content: center;
    
//                 &1,&2{
//                     background-color: red;
//                     margin: 5px;
//                     padding: 5px;
//                     border-radius: 5px;
    
//                     &:hover{
//                         background-color: rgba(255, 0, 0, 0.649);
//                     }
//                 }
//             }
//         }
    
//     }
// }

// @media(max-width:500px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 10px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 flex-direction: column;
//                 padding-right: 20px;
//                 .subscribeSection{
//                     display: flex;
//                     justify-content: space-between;
//                     padding: 3px;
//                     width: 100%;
    
//                     .section1{
//                         width: 100%;
//                         display: flex;
//                         justify-content: space-between;
//                         flex-direction: row;
//                         align-items: center;
    
//                         .section11{
//                             display: flex;
//                             align-items: center;
    
//                             .section111{
//                                 img{
//                                     width: 45px;
//                                     height: 45px;
//                                     border-radius: 50%;
//                                 }
//                                 margin-right: 4px;
//                             }
    
//                             .section112{
//                                 .ownerName{
//                                     font-size: $base-font-size;
//                                     font-weight: 700;
//                                 }
//                                 .ownerSubscribers{
//                                     font-size: 12px;
//                                     color: $secondary-text;
//                                 }
                                
//                             }
//                         }
//                         .section12{
//                             display: flex;
//                             width: 50%;
//                             justify-content: space-around;
//                             align-items: center;
//                             padding: 3px 3px;
//                             .subscribeButton{
//                                 background-color: $button-color;
//                             }
//                             .likeButton{
//                                 color: $background-color;
//                                 background-color: $secondary-text;
//                                 height: 40px;
//                                 width: 70px;
//                                 border-radius: 20px;
//                                 display: flex;
//                                 align-items: center;
//                                 justify-content: center;
//                                 cursor: pointer;
//                                 .likeIcon{
//                                     font-size:30px;
//                                     background-color: $secondary-text;
//                                     color: $button-color;
//                                     border-radius: 50%;
//                                 }
//                                 .unLikeIcon{
//                                     font-size:30px;
//                                     background-color: $secondary-text;
//                                     border-radius: 50%;
//                                 }
//                                 p{
//                                     margin-left: 4px;
//                                     font-size: 22px;
//                                     font-weight: 700;
//                                 }
//                             }
//                         }
//                     }
                    
                        
//                 }
//                 .description{
//                     background-color: $secondary-color;
//                     border-radius: 20px;
//                     margin: 10px 0;
//                     padding: 10px;
//                     .section21{
//                         display: flex;
//                         flex-direction: row;
//                         color: $text-color;
//                         p{
//                             font-size: 14px;
//                             margin:5px 5px 5px 0 ;
//                         }
                        
//                     }
//                     .section22{
//                         .section221{
//                             font-weight: 700;
//                             font-size: 26px;
//                         }
//                         p{
//                             font-size: 18px;
//                         }
//                     }
//                 }
//                 .commentSection{
//                     display: flex;
//                     flex-direction: row;
//                     padding:10px 10px;
//                     .commentSection1{
//                         margin-right: 10px;
//                         p{
//                             font-size: 20px;
//                             font-weight: 700;
//                         }
//                     }
//                     .commentSection2{
//                         margin-left: 20px;
//                         width: 20%;
//                         display: flex;
//                         flex-direction: row;
//                         justify-content: space-between;
//                         align-items: center;
//                     }
//                 }
//                 .comments{
//                     .comments1{
                        

//                         .comments11{
//                             display: flex;
//                             flex-direction: row;
//                             align-items: center;
//                             width: 100%;
//                             justify-content: space-between;
//                             padding:10px 10px;
    
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                             }
//                             input{
//                                 height: 35px;
//                                 width: 40%;
//                                 color: black;
//                             }
//                         }
//                         .divider{
//                             width: 100%;
//                             height: 1px;
//                             background-color: white;
//                             margin: 20px 0;
//                         }
//                     }
//                 }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     .channelCommentsSection{
//                         display: flex;
//                         flex-direction: row;
//                         padding: 10px 0;
//                         width:100% ;
//                         align-items: center;
//                         height: auto;
//                         overflow-wrap: break-word;
    
//                         .channelCommentsSection1{
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                                 margin: 0 20px 0 0;
//                             }
//                         }
//                         .channelCommentsSection2{
//                             width: 100%;
//                             .channelCommentsSection21{
//                                 display: flex;
//                                 align-items: center;
//                                 .channelCommentsSection211{
//                                     margin: 0 20px 0 0;
                                    
//                                 }
//                                 .channelCommentsSection212{
//                                     color: $secondary-text;
//                                 }
//                                 .channelCommentsSection213{
//                                     margin-left: 2rem;
//                                 }
//                                 .commentDropdown{
//                                     position: absolute;
//                                     display: flex;
//                                     flex-direction: column;
//                                     margin-left: 300px;
//                                     button{
//                                         font-size: 10px;
//                                     }
//                                 }
//                             }
//                             &2{
//                                 height: auto;
//                                 width: 100%;
//                                 &1{
//                                     width: 100%;
//                                     word-break: break-word; /* Ensure long words break and wrap */
//                                     overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                                     white-space: normal;
//                                 }
//                             }
//                             .channelCommensSection23{
//                                 display: flex;
//                                 flex-direction: row;
//                                 justify-content: space-between;
//                                 width: 30px;
//                                 align-items: center;
//                                 .channelCommensSection231{
//                                     // color: red;
//                                     .likeIcon{
//                                         color: red;
//                                     }
//                                     .unLikeIcon{
//                                         color:white;
//                                     }
//                                 }
                                
//                                 p{
//                                     color: $secondary-text;
//                                 }
//                             }
//                         }
//                     }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 53vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 9px 15px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 // height: 60vw;
//                 padding: 20px 15px 20vw 0px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 0px;
//                 gap: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 98vw;
//                     height: 75vw;
//                     display: flex;
//                     flex-direction: column;
//                     justify-content: flex-start;
//                     border: 2px solid rgb(45, 45, 45);

//                     // gap: 2px;

//                     padding-right: 0px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
//                     background-color: $hover-bg-color;

//                     &:hover{
//                         transform: scale(1);
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 100%;
//                         height: 47vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 0px;
//                         .watchVideoSection11{
//                             margin: 0 0px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 100%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 18px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 14px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 12px;
//                             }
//                             .dot{
//                                 font-size: 12px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 12px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         position: fixed;
//         left: 0;
//         top:0;
//         width: 100%;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 75%;
//             height: 20%;
//             background-color: black;
//             padding: 10px;
//             display: flex;
//             align-items: center;
//             flex-direction: column;
//             box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             transition: 0.4s;
//             border-radius: 10px;
    
//             &:hover{
//                 transform: scale(0.98);
//             }
//             .editCommentContainer11{
//                 font-size: 20px;
//                 font-weight: 700;
//                 margin-bottom: 10px;
//             }
//             .editCommentContainer12{
//                 width: 100%;
//                 display: flex;
//                 flex-direction: column;
//                 .editCommentContainer121{
//                     font-size: 16px;
//                     font-weight: 600;
//                 }
//                 .editCommentContainer122{
//                     color: black;
//                     border-radius: 5px;
//                     border: 2px solid black;
//                     margin-bottom: 10px;
//                     &:focus{
//                         outline: none;
//                         border-color: red;
//                     }
//                 }
//             }
    
//             .formButtons{
//                 width: 50%;
//                 display: flex;
//                 justify-content: center;
    
//                 &1,&2{
//                     background-color: red;
//                     margin: 5px;
//                     padding: 5px;
//                     border-radius: 5px;
    
//                     &:hover{
//                         background-color: rgba(255, 0, 0, 0.649);
//                     }
//                 }
//             }
//         }
    
//     }
// }


// // @media(max-width:360px){
    
// // }


// // *{
// //     background-color:#0f0f0f;
// // }

// // body{
// //     background-color:#0f0f0f;
// // }
// @import '../../index.scss';

// .box{
//     padding:0vw;
//     width: 99%;
//     height: auto;
//     .SearchBar{
//         position: fixed;
//         height: 56px;
//         width: 100vw;
//         background-color:$background-color;
//         z-index: 100;
//     }
//         .displayer{
//             width: 100%;
//             background-color: aqua;
//         }
//         .left-side2{
//             position: fixed;
//             margin-top: 4%;
        
//             height: 100vh;
//             color: white;
//             background-color:$background-color;
//             z-index: 2;
//         }
//         .left-side {
//             position: fixed;
//             margin-top: 4%;
//             width: 15%;
//             height: 100vh;
//             color: white;
//             background-color:$background-color;
//             z-index: 2;
//         }
//         .right-side-WithNav {
//             // width: 100%;
//             // height: auto;
//             // display: flex;
//             // flex-direction: column;
//             // background-color:$background-color;
            
//         }
//         .right-side-WithoutNav{
//             margin-top:4%;
            
//             width: 100%;
//             height: auto;
//             display: flex;
//             flex-direction: column;
//             background-color:$background-color;
            
//         }
//     }
    
    
//     .watchVideo-container {
//         background-color: $background-color;
//         display: flex;
//         justify-content: space-between;
//         // margin: 20px;
//         margin-top: 5px;
//         height: auto;
    
//         width: 100%;
//         height: 100vh;
    
//         .watchVideo-left-side {
//             width: 68%;
//             height: auto;
//             display: flex;
        
//             flex-direction: column;
//             padding-right: 20px;
//             .subscribeSection{
//                 display: flex;
//                 justify-content: space-between;
//                 padding: 3px;
//                 width: 100%;

//                 .section1{
//                     width: 70%;
//                     display: flex;
//                     justify-content: space-between;
//                     flex-direction: row;
//                     align-items: center;

//                     .section11{
//                         display: flex;
//                         align-items: center;

//                         .section111{
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                             }
//                             margin-right: 4px;
//                         }

//                         .section112{
//                             .ownerName{
//                                 font-size: $base-font-size;
//                                 font-weight: 700;
//                             }
//                             .ownerSubscribers{
//                                 font-size: 12px;
//                                 color: $secondary-text;
//                             }
                            
//                         }
//                     }
//                     .section12{
//                         display: flex;
//                         width: 50%;
//                         justify-content: space-around;
//                         align-items: center;
//                         padding: 3px 3px;
//                         .subscribeButton{
//                             background-color: $button-color;
//                         }
//                         .likeButton{
//                             color: $background-color;
//                             background-color: $secondary-text;
//                             height: 40px;
//                             width: 80px;
//                             border-radius: 20px;
//                             display: flex;
//                             align-items: center;
//                             justify-content: center;
//                             cursor: pointer;
//                             .likeIcon{
//                                 font-size:30px;
//                                 background-color: $secondary-text;
//                                 color: $button-color;
//                                 border-radius: 50%;
//                             }
//                             .unLikeIcon{
//                                 font-size:30px;
//                                 background-color: $secondary-text;
//                                 border-radius: 50%;
//                             }
//                             p{
//                                 margin-left: 4px;
//                                 font-size: 22px;
//                                 font-weight: 700;
//                             }
//                         }
//                     }
//                 }
                
                    
//             }
//             .description{
//                 background-color: $secondary-color;
//                 border-radius: 20px;
//                 margin: 10px 0;
//                 padding: 10px;
//                 .section21{
//                     display: flex;
//                     flex-direction: row;
//                     color: $text-color;
//                     p{
//                         font-size: 14px;
//                         margin:5px 5px 5px 0 ;
//                     }
                    
//                 }
//                 .section22{
//                     .section221{
//                         font-weight: 700;
//                         font-size: 26px;
//                     }
//                     p{
//                         font-size: 22px;
//                     }
//                 }
//             }
//             .commentSection{
//                 display: flex;
//                 flex-direction: row;
//                 padding:10px 10px;
//                 .commentSection1{
//                     margin-right: 10px;
//                     p{
//                         font-size: 20px;
//                         font-weight: 700;
//                     }
//                 }
//                 .commentSection2{
//                     margin-left: 20px;
//                     width: 9%;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: space-between;
//                     align-items: center;
//                 }
//             }
//             .comments{
//                 .comments1{
//                     .comments11{
//                         display: flex;
//                         flex-direction: row;
//                         align-items: center;
//                         width: 100%;
//                         justify-content: space-between;
//                         padding:10px 10px;

//                         img{
//                             width: 45px;
//                             height: 45px;
//                             border-radius: 50%;
//                         }
//                         input{
//                             height: 30px;
//                             width: 60%;
//                             color: black;
//                         }
//                     }
//                     .divider{
//                         width: 100%;
//                         height: 1px;
//                         background-color: white;
//                         margin: 20px 0;
//                     }
//                 }
//             }
//             .channelComments{
//                 display: flex;
//                 flex-direction: column;
//                 padding: 10px 10px;
//                 width: 100%;
//                 .channelCommentsSection{
//                     display: flex;
//                     flex-direction: row;
//                     padding: 10px 0;
//                     width:100% ;
//                     align-items: center;
//                     height: auto;
//                     overflow-wrap: break-word;

//                     .channelCommentsSection1{
//                         img{
//                             width: 45px;
//                             height: 45px;
//                             border-radius: 50%;
//                             margin: 0 20px 0 0;
//                         }
//                     }
//                     .channelCommentsSection2{
//                         width: 100%;
//                         .channelCommentsSection21{
//                             display: flex;
//                             align-items: center;
//                             .channelCommentsSection211{
//                                 margin: 0 20px 0 0;
                                
//                             }
//                             .channelCommentsSection212{
//                                 color: $secondary-text;
//                             }
//                             .channelCommentsSection213{
//                                 margin-left: 2rem;
//                             }
//                             .commentDropdown{
//                                 position: absolute;
//                                 display: flex;
//                                 flex-direction: column;
//                                 margin-left: 300px;
//                                 button{
//                                     font-size: 10px;
//                                 }
//                             }
//                         }
//                         &2{
//                             height: auto;
//                             width: 100%;
//                             &1{
//                                 width: 100%;
//                                 word-break: break-word; /* Ensure long words break and wrap */
//                                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                                 white-space: normal;
//                             }
//                         }
//                         .channelCommensSection23{
//                             display: flex;
//                             flex-direction: row;
//                             justify-content: space-between;
//                             width: 30px;
//                             align-items: center;
//                             .channelCommensSection231{
//                                 // color: red;
//                                 .likeIcon{
//                                     color: red;
//                                 }
//                                 .unLikeIcon{
//                                     color:white;
//                                 }
//                             }
                            
//                             p{
//                                 color: $secondary-text;
//                             }
//                         }
//                     }
//                 }
//             }
            

//             video {
//                 width: 100%;
//                 border-radius: 20px;
//                 height: 35vw;
//                 // pointer-events: none;
//             }
    
//             button {
//                 margin-top: 10px;
//                 padding: 10px 20px;
//                 background-color: #4a4a4a;
//                 color: white;
//                 border: none;
//                 border-radius: 5px;
//                 cursor: pointer;
    
//                 &:hover {
//                     background-color: #6a6a6a;
//                 }
//             }
    
//             .video-title {
//                 width: 100%;
//                 color: white;
//                 font-weight: bold;
//                 font-size: 1.3rem;
//                 margin-top: 10px;
//             }
//         }
    
//         .watchVideo-right-side {
//             width: 30%;
//             display: flex;
//             flex-direction: column;
//             margin-right: 5px;
//             color: $text-color;
//             font-size: $base-font-size;
//             background-color: $background-color;
//             height: auto;
//             align-items: center;
//             .watchVideoSection{
//                 width: 50vh;
//                 display: flex;
//                 flex-direction: row;
//                 justify-content: space-between;
//                 padding: 5px;
//                 transition-duration: 0.5s;
//                 border-radius: 10px;

//                 &:hover{
//                     transform: scale(0.98);
//                     background-color: $hover-bg-color;
//                     box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                 }
//                 .watchVideoSection1{
//                     width: 45%;
//                     height: 15vh;
//                     display: flex;
//                     align-items: center;
//                     .watchVideoSection11{
//                         margin: 0 6px 0 0 ;
//                         width: 100%;
//                         height: 100%;
//                         border-radius: 5px;
//                         // object-fit:cover;
//                     }
//                 }
//                 .watchVideoSection2{
//                     width: 50%;
//                     .watchVideoSection21{
//                         .watchVideoSection211{
//                             font-size: 14px;
//                             font-weight: 700;
//                         }
//                     }
//                     .watchVideoSection22{
//                         margin-top: 5px;
//                         .watchVideoSection221{
//                             font-size: 13px;
//                             color: $secondary-text;
//                         }
//                     }
//                     .watchVideoSection23{
//                         display: flex;
//                         flex-direction: row;
//                         font-size: 12px;
//                         color: $secondary-text;
//                         .views{
//                             font-size: 12px;
//                         }
//                         .dot{
//                             font-size: 12px;
//                         }
//                         .time{
//                             font-size: 12px;
//                         }
//                     }
//                 }
//             }
//         }
    
//     }

// .editCommentContainer{
//     position: fixed;
//     left: 0;
//     top:0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: rgba(0, 0, 0, 0.571);
    
    
//     .editCommentContainer1{
//         width: 35%;
//         height: 25%;
//         background-color: black;
//         padding: 10px;
//         display: flex;
//         align-items: center;
//         flex-direction: column;
//         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//         transition: 0.4s;
//         border-radius: 10px;

//         &:hover{
//             transform: scale(0.98);
//         }
//         .editCommentContainer11{
//             font-size: 20px;
//             font-weight: 700;
//             margin-bottom: 10px;
//         }
//         .editCommentContainer12{
//             width: 100%;
//             display: flex;
//             flex-direction: column;
//             .editCommentContainer121{
//                 font-size: 16px;
//                 font-weight: 600;
//             }
//             .editCommentContainer122{
//                 color: black;
//                 border-radius: 5px;
//                 border: 2px solid black;
//                 margin-bottom: 10px;
//                 &:focus{
//                     outline: none;
//                     border-color: red;
//                 }
//             }
//         }

//         .formButtons{
//             width: 50%;
//             display: flex;
//             justify-content: center;

//             &1,&2{
//                 background-color: red;
//                 margin: 5px;
//                 padding: 5px;
//                 border-radius: 5px;

//                 &:hover{
//                     background-color: rgba(255, 0, 0, 0.649);
//                 }
//             }
//         }
//     }

// }


// @media(max-width:1280px){
//     .box{
//         padding:0vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             // position: fixed;
//             // height: 56px;
//             // width: 100vw;
//             // background-color:$background-color;
//             // z-index: 100;
//         }
//             // .displayer{
//             //     width: 100%;
//             //     background-color: aqua;
//             // }
//             // .left-side2{
//             //     position: fixed;
//             //     margin-top: 4%;
            
//             //     height: 100vh;
//             //     color: white;
//             //     background-color:$background-color;
//             //     z-index: 2;
//             // }
//             // .left-side {
//             //     position: fixed;
//             //     margin-top: 4%;
//             //     width: 15%;
//             //     height: 100vh;
//             //     color: white;
//             //     background-color:$background-color;
//             //     z-index: 2;
//             // }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 // margin-top:4%;
                
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             // // margin: 20px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 45vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     // background-color: #4a4a4a;
//                     // color: white;
//                     // border: none;
//                     // border-radius: 5px;
//                     // cursor: pointer;
        
//                     // &:hover {
//                     //     background-color: #6a6a6a;
//                     // }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     // color: white;
//                     // font-weight: bold;
//                     // font-size: 1.3rem;
//                     // margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 0;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 // color: $text-color;
//                 // font-size: $base-font-size;
//                 // background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 80vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
    
//                     // &:hover{
//                     //     transform: scale(0.98);
//                     //     background-color: $hover-bg-color;
//                     //     box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     // }
//                     .watchVideoSection1{
//                         width: 30%;
//                         height: 15vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 60%;
//                         .watchVideoSection21{
//                             // .watchVideoSection211{
//                             //     font-size: 26px;
//                             //     font-weight: 700;
//                             // }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             // .watchVideoSection221{
//                             //     font-size: 18px;
//                             //     color: $secondary-text;
//                             // }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             // color: $secondary-text;
//                             .views{
//                                 font-size: 14px;
//                             }
//                             .dot{
//                                 font-size: 14px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 14px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     // .editCommentContainer{
//     //     position: fixed;
//     //     left: 0;
//     //     top:0;
//     //     width: 100%;
//     //     height: 100%;
//     //     display: flex;
//     //     align-items: center;
//     //     justify-content: center;
//     //     background-color: rgba(0, 0, 0, 0.571);
        
        
//     //     .editCommentContainer1{
//     //         width: 35%;
//     //         height: 20%;
//     //         background-color: black;
//     //         padding: 10px;
//     //         display: flex;
//     //         align-items: center;
//     //         flex-direction: column;
//     //         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//     //         transition: 0.4s;
//     //         border-radius: 10px;
    
//     //         &:hover{
//     //             transform: scale(0.98);
//     //         }
//     //         .editCommentContainer11{
//     //             font-size: 20px;
//     //             font-weight: 700;
//     //             margin-bottom: 10px;
//     //         }
//     //         .editCommentContainer12{
//     //             width: 100%;
//     //             display: flex;
//     //             flex-direction: column;
//     //             .editCommentContainer121{
//     //                 font-size: 16px;
//     //                 font-weight: 600;
//     //             }
//     //             .editCommentContainer122{
//     //                 color: black;
//     //                 border-radius: 5px;
//     //                 border: 2px solid black;
//     //                 margin-bottom: 10px;
//     //                 &:focus{
//     //                     outline: none;
//     //                     border-color: red;
//     //                 }
//     //             }
//     //         }
    
//     //         .formButtons{
//     //             width: 50%;
//     //             display: flex;
//     //             justify-content: center;
    
//     //             &1,&2{
//     //                 background-color: red;
//     //                 margin: 5px;
//     //                 padding: 5px;
//     //                 border-radius: 5px;
    
//     //                 &:hover{
//     //                     background-color: rgba(255, 0, 0, 0.649);
//     //                 }
//     //             }
//     //         }
//     //     }
    
//     // }
// }

// @media(max-width:1024px){
//     video {
//         width: 100%;
//         border-radius: 20px;
//         height: 55vw;
//         // pointer-events: none;
//     }
// }

// @media(max-width:767px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 40px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 55vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 100px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 80vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
    
//                     &:hover{
//                         transform: scale(0.98);
//                         background-color: $hover-bg-color;
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 30%;
//                         height: 15vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 60%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 22px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 16px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 14px;
//                             }
//                             .dot{
//                                 font-size: 14px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 14px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         // position: fixed;
//         // left: 0;
//         // top:0;
//         // width: 100%;
//         // height: 100%;
//         // display: flex;
//         // align-items: center;
//         // justify-content: center;
//         // background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 45%;
//             height: 18%;
//             // background-color: black;
//             // padding: 10px;
//             // display: flex;
//             // align-items: center;
//             // flex-direction: column;
//             // box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             // transition: 0.4s;
//             // border-radius: 10px;
    
//             // &:hover{
//             //     transform: scale(0.98);
//             // }
//             // .editCommentContainer11{
//             //     font-size: 20px;
//             //     font-weight: 700;
//             //     margin-bottom: 10px;
//             // }
//             // .editCommentContainer12{
//             //     width: 100%;
//             //     display: flex;
//             //     flex-direction: column;
//             //     .editCommentContainer121{
//             //         font-size: 16px;
//             //         font-weight: 600;
//             //     }
//             //     .editCommentContainer122{
//             //         color: black;
//             //         border-radius: 5px;
//             //         border: 2px solid black;
//             //         margin-bottom: 10px;
//             //         &:focus{
//             //             outline: none;
//             //             border-color: red;
//             //         }
//             //     }
//             // }
    
//             // .formButtons{
//             //     width: 50%;
//             //     display: flex;
//             //     justify-content: center;
    
//             //     &1,&2{
//             //         background-color: red;
//             //         margin: 5px;
//             //         padding: 5px;
//             //         border-radius: 5px;
    
//             //         &:hover{
//             //             background-color: rgba(255, 0, 0, 0.649);
//             //         }
//             //     }
//             // }
//         }
    
//     }
// }

// @media(max-width:600px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 10px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 // flex-direction: column;
//                 // padding-right: 20px;
//                 // .subscribeSection{
//                 //     display: flex;
//                 //     justify-content: space-between;
//                 //     padding: 3px;
//                 //     width: 100%;
    
//                 //     .section1{
//                 //         width: 70%;
//                 //         display: flex;
//                 //         justify-content: space-between;
//                 //         flex-direction: row;
//                 //         align-items: center;
    
//                 //         .section11{
//                 //             display: flex;
//                 //             align-items: center;
    
//                 //             .section111{
//                 //                 img{
//                 //                     width: 45px;
//                 //                     height: 45px;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 margin-right: 4px;
//                 //             }
    
//                 //             .section112{
//                 //                 .ownerName{
//                 //                     font-size: $base-font-size;
//                 //                     font-weight: 700;
//                 //                 }
//                 //                 .ownerSubscribers{
//                 //                     font-size: 12px;
//                 //                     color: $secondary-text;
//                 //                 }
                                
//                 //             }
//                 //         }
//                 //         .section12{
//                 //             display: flex;
//                 //             width: 50%;
//                 //             justify-content: space-around;
//                 //             align-items: center;
//                 //             padding: 3px 3px;
//                 //             .subscribeButton{
//                 //                 background-color: $button-color;
//                 //             }
//                 //             .likeButton{
//                 //                 color: $background-color;
//                 //                 background-color: $secondary-text;
//                 //                 height: 40px;
//                 //                 width: 80px;
//                 //                 border-radius: 20px;
//                 //                 display: flex;
//                 //                 align-items: center;
//                 //                 justify-content: center;
//                 //                 cursor: pointer;
//                 //                 .likeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     color: $button-color;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 .unLikeIcon{
//                 //                     font-size:30px;
//                 //                     background-color: $secondary-text;
//                 //                     border-radius: 50%;
//                 //                 }
//                 //                 p{
//                 //                     margin-left: 4px;
//                 //                     font-size: 22px;
//                 //                     font-weight: 700;
//                 //                 }
//                 //             }
//                 //         }
//                 //     }
                    
                        
//                 // }
//                 // .description{
//                 //     background-color: $secondary-color;
//                 //     border-radius: 20px;
//                 //     margin: 10px 0;
//                 //     padding: 10px;
//                 //     .section21{
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         color: $text-color;
//                 //         p{
//                 //             font-size: 14px;
//                 //             margin:5px 5px 5px 0 ;
//                 //         }
                        
//                 //     }
//                 //     .section22{
//                 //         .section221{
//                 //             font-weight: 700;
//                 //             font-size: 26px;
//                 //         }
//                 //         p{
//                 //             font-size: 22px;
//                 //         }
//                 //     }
//                 // }
//                 // .commentSection{
//                 //     display: flex;
//                 //     flex-direction: row;
//                 //     padding:10px 10px;
//                 //     .commentSection1{
//                 //         margin-right: 10px;
//                 //         p{
//                 //             font-size: 20px;
//                 //             font-weight: 700;
//                 //         }
//                 //     }
//                 //     .commentSection2{
//                 //         margin-left: 20px;
//                 //         width: 9%;
//                 //         display: flex;
//                 //         flex-direction: row;
//                 //         justify-content: space-between;
//                 //         align-items: center;
//                 //     }
//                 // }
//                 // .comments{
//                 //     .comments1{
//                 //         .comments11{
//                 //             display: flex;
//                 //             flex-direction: row;
//                 //             align-items: center;
//                 //             width: 100%;
//                 //             justify-content: space-between;
//                 //             padding:10px 10px;
    
//                 //             img{
//                 //                 width: 45px;
//                 //                 height: 45px;
//                 //                 border-radius: 50%;
//                 //             }
//                 //             input{
//                 //                 height: 30px;
//                 //                 width: 60%;
//                 //                 color: black;
//                 //             }
//                 //         }
//                 //         .divider{
//                 //             width: 100%;
//                 //             height: 1px;
//                 //             background-color: white;
//                 //             margin: 20px 0;
//                 //         }
//                 //     }
//                 // }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     // .channelCommentsSection{
//                     //     display: flex;
//                     //     flex-direction: row;
//                     //     padding: 10px 0;
//                     //     width:100% ;
//                     //     align-items: center;
//                     //     height: auto;
//                     //     overflow-wrap: break-word;
    
//                     //     .channelCommentsSection1{
//                     //         img{
//                     //             width: 45px;
//                     //             height: 45px;
//                     //             border-radius: 50%;
//                     //             margin: 0 20px 0 0;
//                     //         }
//                     //     }
//                     //     .channelCommentsSection2{
//                     //         width: 100%;
//                     //         .channelCommentsSection21{
//                     //             display: flex;
//                     //             align-items: center;
//                     //             .channelCommentsSection211{
//                     //                 margin: 0 20px 0 0;
                                    
//                     //             }
//                     //             .channelCommentsSection212{
//                     //                 color: $secondary-text;
//                     //             }
//                     //             .channelCommentsSection213{
//                     //                 margin-left: 2rem;
//                     //             }
//                     //             .commentDropdown{
//                     //                 position: absolute;
//                     //                 display: flex;
//                     //                 flex-direction: column;
//                     //                 margin-left: 300px;
//                     //                 button{
//                     //                     font-size: 10px;
//                     //                 }
//                     //             }
//                     //         }
//                     //         &2{
//                     //             height: auto;
//                     //             width: 100%;
//                     //             &1{
//                     //                 width: 100%;
//                     //                 word-break: break-word; /* Ensure long words break and wrap */
//                     //                 overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                     //                 white-space: normal;
//                     //             }
//                     //         }
//                     //         .channelCommensSection23{
//                     //             display: flex;
//                     //             flex-direction: row;
//                     //             justify-content: space-between;
//                     //             width: 30px;
//                     //             align-items: center;
//                     //             .channelCommensSection231{
//                     //                 // color: red;
//                     //                 .likeIcon{
//                     //                     color: red;
//                     //                 }
//                     //                 .unLikeIcon{
//                     //                     color:white;
//                     //                 }
//                     //             }
                                
//                     //             p{
//                     //                 color: $secondary-text;
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 55vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 10px 20px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 padding: 20px 20px 10vw 10px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 5px;
//                 gap: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 95vw;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: flex-start;
//                     border: 2px solid rgb(45, 45, 45);

//                     // gap: 2px;

//                     padding: 5px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
//                     background-color: $hover-bg-color;

//                     &:hover{
//                         transform: scale(1);
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 50%;
//                         height: 25vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 20px;
//                         .watchVideoSection11{
//                             margin: 0 6px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 50%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 18px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 14px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 12px;
//                             }
//                             .dot{
//                                 font-size: 12px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 12px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         position: fixed;
//         left: 0;
//         top:0;
//         width: 100%;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 65%;
//             height: 25%;
//             background-color: black;
//             padding: 10px;
//             display: flex;
//             align-items: center;
//             flex-direction: column;
//             box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             transition: 0.4s;
//             border-radius: 10px;
    
//             &:hover{
//                 transform: scale(0.98);
//             }
//             .editCommentContainer11{
//                 font-size: 20px;
//                 font-weight: 700;
//                 margin-bottom: 10px;
//             }
//             .editCommentContainer12{
//                 width: 100%;
//                 display: flex;
//                 flex-direction: column;
//                 .editCommentContainer121{
//                     font-size: 16px;
//                     font-weight: 600;
//                 }
//                 .editCommentContainer122{
//                     color: black;
//                     border-radius: 5px;
//                     border: 2px solid black;
//                     margin-bottom: 10px;
//                     &:focus{
//                         outline: none;
//                         border-color: red;
//                     }
//                 }
//             }
    
//             .formButtons{
//                 width: 50%;
//                 display: flex;
//                 justify-content: center;
    
//                 &1,&2{
//                     background-color: red;
//                     margin: 5px;
//                     padding: 5px;
//                     border-radius: 5px;
    
//                     &:hover{
//                         background-color: rgba(255, 0, 0, 0.649);
//                     }
//                 }
//             }
//         }
    
//     }
// }

// @media(max-width:500px){
//     .box{
//         padding:1vw;
//         width: 99%;
//         height: auto;
//         .SearchBar{
//             position: fixed;
//             height: 56px;
//             width: 100vw;
//             background-color:$background-color;
//             z-index: 100;
//         }
//             .displayer{
//                 width: 100%;
//                 background-color: aqua;
//             }
//             .left-side2{
//                 position: fixed;
//                 margin-top: 4%;
            
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .left-side {
//                 position: fixed;
//                 margin-top: 4%;
//                 width: 15%;
//                 height: 100vh;
//                 color: white;
//                 background-color:$background-color;
//                 z-index: 2;
//             }
//             .right-side-WithNav {
//                 // width: 100%;
//                 // height: auto;
//                 // display: flex;
//                 // flex-direction: column;
//                 // background-color:$background-color;
                
//             }
//             .right-side-WithoutNav{
//                 margin-top:4%;
                
//                 width: 100%;
//                 height: auto;
//                 display: flex;
//                 flex-direction: column;
//                 background-color:$background-color;
                
//             }
//         }
        
        
//         .watchVideo-container {
//             background-color: $background-color;
//             display: flex;
//             // justify-content: space-between;
//             flex-direction: column;
//             margin-left: 10px;
//             // margin-top: 5px;
//             // height: auto;
        
//             // width: 100%;
//             // height: 100vh;
        
//             .watchVideo-left-side {
//                 width: 100%;
                
//                 display: flex;
            
//                 flex-direction: column;
//                 padding-right: 20px;
//                 .subscribeSection{
//                     display: flex;
//                     justify-content: space-between;
//                     padding: 3px;
//                     width: 100%;
    
//                     .section1{
//                         width: 100%;
//                         display: flex;
//                         justify-content: space-between;
//                         flex-direction: row;
//                         align-items: center;
    
//                         .section11{
//                             display: flex;
//                             align-items: center;
    
//                             .section111{
//                                 img{
//                                     width: 45px;
//                                     height: 45px;
//                                     border-radius: 50%;
//                                 }
//                                 margin-right: 4px;
//                             }
    
//                             .section112{
//                                 .ownerName{
//                                     font-size: $base-font-size;
//                                     font-weight: 700;
//                                 }
//                                 .ownerSubscribers{
//                                     font-size: 12px;
//                                     color: $secondary-text;
//                                 }
                                
//                             }
//                         }
//                         .section12{
//                             display: flex;
//                             width: 50%;
//                             justify-content: space-around;
//                             align-items: center;
//                             padding: 3px 3px;
//                             .subscribeButton{
//                                 background-color: $button-color;
//                             }
//                             .likeButton{
//                                 color: $background-color;
//                                 background-color: $secondary-text;
//                                 height: 40px;
//                                 width: 70px;
//                                 border-radius: 20px;
//                                 display: flex;
//                                 align-items: center;
//                                 justify-content: center;
//                                 cursor: pointer;
//                                 .likeIcon{
//                                     font-size:30px;
//                                     background-color: $secondary-text;
//                                     color: $button-color;
//                                     border-radius: 50%;
//                                 }
//                                 .unLikeIcon{
//                                     font-size:30px;
//                                     background-color: $secondary-text;
//                                     border-radius: 50%;
//                                 }
//                                 p{
//                                     margin-left: 4px;
//                                     font-size: 22px;
//                                     font-weight: 700;
//                                 }
//                             }
//                         }
//                     }
                    
                        
//                 }
//                 .description{
//                     background-color: $secondary-color;
//                     border-radius: 20px;
//                     margin: 10px 0;
//                     padding: 10px;
//                     .section21{
//                         display: flex;
//                         flex-direction: row;
//                         color: $text-color;
//                         p{
//                             font-size: 14px;
//                             margin:5px 5px 5px 0 ;
//                         }
                        
//                     }
//                     .section22{
//                         .section221{
//                             font-weight: 700;
//                             font-size: 26px;
//                         }
//                         p{
//                             font-size: 18px;
//                         }
//                     }
//                 }
//                 .commentSection{
//                     display: flex;
//                     flex-direction: row;
//                     padding:10px 10px;
//                     .commentSection1{
//                         margin-right: 10px;
//                         p{
//                             font-size: 20px;
//                             font-weight: 700;
//                         }
//                     }
//                     .commentSection2{
//                         margin-left: 20px;
//                         width: 20%;
//                         display: flex;
//                         flex-direction: row;
//                         justify-content: space-between;
//                         align-items: center;
//                     }
//                 }
//                 .comments{
//                     .comments1{
                        

//                         .comments11{
//                             display: flex;
//                             flex-direction: row;
//                             align-items: center;
//                             width: 100%;
//                             justify-content: space-between;
//                             padding:10px 10px;
    
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                             }
//                             input{
//                                 height: 35px;
//                                 width: 40%;
//                                 color: black;
//                             }
//                         }
//                         .divider{
//                             width: 100%;
//                             height: 1px;
//                             background-color: white;
//                             margin: 20px 0;
//                         }
//                     }
//                 }
//                 .channelComments{
//                     display: flex;
//                     flex-direction: column;
//                     padding: 10px 10px;
//                     width: 100%;
//                     margin: 10px 0;
//                     background-color: #101010;
//                     border: 5px solid $hover-bg-color;
//                     border-radius: 10px;
//                     .channelCommentsSection{
//                         display: flex;
//                         flex-direction: row;
//                         padding: 10px 0;
//                         width:100% ;
//                         align-items: center;
//                         height: auto;
//                         overflow-wrap: break-word;
    
//                         .channelCommentsSection1{
//                             img{
//                                 width: 45px;
//                                 height: 45px;
//                                 border-radius: 50%;
//                                 margin: 0 20px 0 0;
//                             }
//                         }
//                         .channelCommentsSection2{
//                             width: 100%;
//                             .channelCommentsSection21{
//                                 display: flex;
//                                 align-items: center;
//                                 .channelCommentsSection211{
//                                     margin: 0 20px 0 0;
                                    
//                                 }
//                                 .channelCommentsSection212{
//                                     color: $secondary-text;
//                                 }
//                                 .channelCommentsSection213{
//                                     margin-left: 2rem;
//                                 }
//                                 .commentDropdown{
//                                     position: absolute;
//                                     display: flex;
//                                     flex-direction: column;
//                                     margin-left: 300px;
//                                     button{
//                                         font-size: 10px;
//                                     }
//                                 }
//                             }
//                             &2{
//                                 height: auto;
//                                 width: 100%;
//                                 &1{
//                                     width: 100%;
//                                     word-break: break-word; /* Ensure long words break and wrap */
//                                     overflow-wrap: anywhere;  /* Handle breaking words anywhere */
//                                     white-space: normal;
//                                 }
//                             }
//                             .channelCommensSection23{
//                                 display: flex;
//                                 flex-direction: row;
//                                 justify-content: space-between;
//                                 width: 30px;
//                                 align-items: center;
//                                 .channelCommensSection231{
//                                     // color: red;
//                                     .likeIcon{
//                                         color: red;
//                                     }
//                                     .unLikeIcon{
//                                         color:white;
//                                     }
//                                 }
                                
//                                 p{
//                                     color: $secondary-text;
//                                 }
//                             }
//                         }
//                     }
//                 }
                
    
//                 video {
//                     width: 100%;
//                     border-radius: 20px;
//                     height: 53vw;
//                     // pointer-events: none;
//                 }
        
//                 button {
//                     margin-top: 10px;
//                     padding: 9px 15px;
//                     background-color: #4a4a4a;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
        
//                     &:hover {
//                         background-color: #6a6a6a;
//                     }
//                 }
        
//                 .video-title {
//                     width: 100%;
//                     color: white;
//                     font-weight: bold;
//                     font-size: 1.3rem;
//                     margin-top: 10px;
//                 }
//             }
        
//             .watchVideo-right-side {
//                 width: 100%;
//                 // height: 60vw;
//                 padding: 20px 15px 20vw 0px;
//                 display: flex;
//                 flex-direction: column;
//                 margin-right: 0px;
//                 gap: 5px;
//                 color: $text-color;
//                 font-size: $base-font-size;
//                 background-color: $background-color;
//                 height: auto;
//                 align-items: center;
//                 .watchVideoSection{
//                     width: 98vw;
//                     height: 75vw;
//                     display: flex;
//                     flex-direction: column;
//                     justify-content: flex-start;
//                     border: 2px solid rgb(45, 45, 45);

//                     // gap: 2px;

//                     padding-right: 0px;
//                     transition-duration: 0.5s;
//                     border-radius: 10px;
//                     background-color: $hover-bg-color;

//                     &:hover{
//                         transform: scale(1);
//                         box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//                     }
//                     .watchVideoSection1{
//                         width: 100%;
//                         height: 47vw;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-start;
//                         margin-right: 0px;
//                         .watchVideoSection11{
//                             margin: 0 0px 0 0 ;
//                             width: 100%;
//                             height: 100%;
//                             border-radius: 5px;
//                             // object-fit:cover;
//                         }
//                     }
//                     .watchVideoSection2{
//                         width: 100%;
//                         .watchVideoSection21{
//                             .watchVideoSection211{
//                                 font-size: 18px;
//                                 font-weight: 700;
//                             }
//                         }
//                         .watchVideoSection22{
//                             margin-top: 5px;
//                             .watchVideoSection221{
//                                 font-size: 14px;
//                                 color: $secondary-text;
//                             }
//                         }
//                         .watchVideoSection23{
//                             display: flex;
//                             flex-direction: row;
//                             font-size: 12px;
//                             color: $secondary-text;
//                             .views{
//                                 font-size: 12px;
//                             }
//                             .dot{
//                                 font-size: 12px;
//                                 margin: 0 10px;
//                             }
//                             .time{
//                                 font-size: 12px;
//                             }
//                         }
//                     }
//                 }
//             }
        
//         }
    
//     .editCommentContainer{
//         position: fixed;
//         left: 0;
//         top:0;
//         width: 100%;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         background-color: rgba(0, 0, 0, 0.571);
        
        
//         .editCommentContainer1{
//             width: 75%;
//             height: 20%;
//             background-color: black;
//             padding: 10px;
//             display: flex;
//             align-items: center;
//             flex-direction: column;
//             box-shadow: 0px 0px 10px 0.5px rgba(255, 0, 0, 1);
//             transition: 0.4s;
//             border-radius: 10px;
    
//             &:hover{
//                 transform: scale(0.98);
//             }
//             .editCommentContainer11{
//                 font-size: 20px;
//                 font-weight: 700;
//                 margin-bottom: 10px;
//             }
//             .editCommentContainer12{
//                 width: 100%;
//                 display: flex;
//                 flex-direction: column;
//                 .editCommentContainer121{
//                     font-size: 16px;
//                     font-weight: 600;
//                 }
//                 .editCommentContainer122{
//                     color: black;
//                     border-radius: 5px;
//                     border: 2px solid black;
//                     margin-bottom: 10px;
//                     &:focus{
//                         outline: none;
//                         border-color: red;
//                     }
//                 }
//             }
    
//             .formButtons{
//                 width: 50%;
//                 display: flex;
//                 justify-content: center;
    
//                 &1,&2{
//                     background-color: red;
//                     margin: 5px;
//                     padding: 5px;
//                     border-radius: 5px;
    
//                     &:hover{
//                         background-color: rgba(255, 0, 0, 0.649);
//                     }
//                 }
//             }
//         }
    
//     }
// }


// // @media(max-width:360px){
    
// // }