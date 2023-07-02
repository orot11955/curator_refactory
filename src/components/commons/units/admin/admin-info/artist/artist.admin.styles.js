import styled from "@emotion/styled";

//관리자 정보 (회원관리)
export const Wrapper = styled.div`
    width: 1300px;
    height: auto;
    display: flex;
    margin: 30px;
    padding: 20px;
    margin : auto;
`
export const ArtistWrapper= styled.div`
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
    padding: 40px;
`
export const ArtistTitle = styled.div`
    font-size: 22px;
    padding: 26px;
    color: #1355BD;
    font-weight: bold;
`

export const ArtistBtn = styled.div`
    width: 200px;
    height: 32px;
    display: flex;
    justify-content: space-between;
    margin: 10px 50px 0  auto ;
`

export const Btn = styled.button`
    &:hover {
        background-color: white;
        color: black;
    }

    width: 90px;
    height: 100%;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: black;
    color: white;
`

// 회원관리 테이블 
export const ArtistTable = styled.table`
    width: 830px;
    height: auto;
    margin: auto;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
    border-radius: 10px;
    padding: 10px;
    text-align: center;
`

export const Th = styled.th`
    padding: 15px;
`

export const Tr = styled.tr``
export const Td = styled.td`
    padding: 10px;
`

export const CheckBox = styled.input``

// export const MyProfile = styled.div`
//     width: 300px;
//     height: 50px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
// `
// export const MyName = styled.div`
//     color: rgba(0,0,0,0.8);
//     font-size: 17px;
//     margin-bottom: 7px;
// `
// export const MyEmail = styled.div`
//     display: flex;
//     align-items: center;
//     color: gray;
//     font-size: 15px;
//     padding:  2px;
// `
// export const MySns = styled.div`
//     display: flex;
//     align-items: center;
//     color: gray;
//     font-size: 15px;
//     margin-right: 5px;
// `

// export const BtnModify = styled.button`
//     width: 90px;
//     height: 30px; 
//     margin-left: auto;
//     margin-right: 15px;
//     background-color: white;
//     border: 1px solid rgba(0,0,0,0.5);
//     border-radius: 5px;

//     &:hover {
//         background-color: black;
//         color: white;
//     }
// `

// export const Label = styled.div`
//     font-size: 15px;
//     text-align: center;
//     color: rgba(0,0,0,0.8);
// `

// export const MyPassword = styled.input`
//     width: 200px;
//     height: 15px;
//     border: none;
//     border-bottom: 1px solid gray;
//     margin: 0 40px 0 10px;
// `


// export const PaymentWrapper = styled.div`
//     width: 1000px;
//     height: 550px;
// `

// export const MembershipTable = styled.div`
//     width: 100%;
//     height: 55px;
//     margin: auto;
//     background-color: rgba(97,127,183,0.9);
//     color: white;
//     border-radius: 5px;
//     display:flex;
//     align-items: center;
//     justify-content: flex-start;
// `
    
// export const MembershipInfo = styled.div`
//     width: 80px;
//     padding-left: 20px;
// `
// export const MembershipLevel = styled.div`
//     font-size: 14px;
//     width: 210px;
//     display: flex;
//     flex-direction: column;
// `
// export const DottedLine = styled.div`
//     border-bottom: 2px dotted rgba(0,0,0,0.2);
//     margin: 4px;
// `
// export const Level = styled.div``
// export const Coupon = styled.div``

// export const PaymentTable = styled.div`
//     width: 100%;
//     height: 200px;
//     margin-top: 20px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: center;
//     box-shadow: 1px 1px 4px rgba(0,0,0,0.4);
// `

// export const ServiceTable = styled.div`
//     width: 100%;
//     height: 200px;
    
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: center;
//     box-shadow: 1px 1px 4px rgba(0,0,0,0.4);
// `
// export const PaymentColumn = styled.div`
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;   
// `

// // 나의 구매내역  
// export const MyPayTable = styled.div`
//     width: 100%;
//     height: 200px;
//     margin-top: 10px;
//     display: flex;
//     justify-content: space-between;
//     box-shadow: 1px 1px 4px rgba(0,0,0,0.4);
//     display: flex;
// `
// export const MyPayColumn1 = styled.div`
//     width: 630px;
//     height: 200px;
//     display: flex;
//     justify-content: space-evenly;
//     align-items: center;
// `
// export const MyPayColumn2 = styled.div`
//     width: 190px;
//     height: 200px;
//     border-left: 1px solid rgba(0,0,0,0.1);
//     display: flex;
//     flex-direction: column;
//     justify-content: space-evenly;
//     align-items: center;
// `
// export const ProductProfile = styled.div`
//     width: 120px;
//     height: 150px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
// `

// export const ProductDelivery = styled.div`
//     width: 110px;
//     height: 10px;
//     font-size: 19px;
//     font-weight: 600;
//     color: #364D79;
//     text-align: center;
// `
// export const Image = styled.div`
//     width: 110px;
//     height: 120px;
//     background-image: url('/images/pop01.jpg');
//     background-size: cover;
// `

// export const ProductInfo = styled.div`
//     width: 400px;
//     height: 175px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
// `
// export const ProductTitle = styled.div`
//     font-size: 17px;
//     font-weight: 500;
//     padding-bottom: 8px;

// `
// export const ProductContent = styled.div`
//     font-size: 14px;
//     color: rgba(0,0,0,0.8);
//     margin-bottom: 7px;
// `
// export const ProductPrice = styled.div`
//     font-size: 15px;
//     color: rgba(0,0,0,0.9);
//     font-weight: 500;
// `

// export const ProductBtn = styled.button`
//     width: 150px;
//     height: 40px;
//     border: 1px solid rgba(0,0,0,0.2);
//     border-radius: 5px;
//     background-color: white;
//     font-weight: 500;
//     font-size: 14px;

//     &:hover{
//         border: 2px solid #364D79;
//     }
// `




// export const Menu = styled.div`
//     width: 100%;
//     height: 45px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: #364d73;
//     color: white;
//     &:hover {
//         background-color: white;
//         color: black;
//     }   
// `

// export const PaymentMessage = styled.div`
//     font-size: 15px;
//     margin-top: auto;
//     color: rgba(0,0,0,0.9);
// `
// export const Link = styled.a`
//     &:hover {
//         color: white;
//         background-color: black;
//     }
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-decoration: none;
    
//     width: 130px;
//     height: 33px;
//     color: black;
//     font-size: 14px;
//     box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
//     background-color: white;
//     margin: 0 10px;
// ` 
