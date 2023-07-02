import styled from "@emotion/styled";

//Link
export const Link = styled.a`
    &:hover {
        color: white;
        background-color: black;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 130px;
    height: 33px;
    color: black;
    font-size: 14px;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
    background-color: white;
    margin: 0 10px;
` 
//Table 
export const Table = styled.table`
    width: 770px;
    height: auto;
    margin: auto;
    text-align: center;
`
export const Tr = styled.tr``
export const Td = styled.td``
export const Th = styled.th`
    padding: 10px;
`
export const ProductImage = styled.img`
    width:100px;
    height:100px;
`

//Button 
export const Btn = styled.div`
border: 1px solid blue;
`

//회원정보 전체 Wrapper
export const Wrapper = styled.div`
    width: 1300px;
    height: auto;
    display: flex;
    margin: 30px;
    padding: 20px;
    margin : auto;
`
export const InfoWrapper= styled.div`
    width: 900px;
    height: auto;
    border-radius: 20px;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
    padding: 50px;
`
export const InfoTitle = styled.div`
    font-size: 17px;
    font-weight: 500;
    padding: 20px;
`
export const Profile = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 40px 45px;
    border-bottom: 1px solid rgba(0,0,0,0.1);

    &:last-of-type {
        border: none;
    }
`

// 회원정보 수정 
export const MyProfile = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;

`
export const MyName = styled.div`
    color: rgba(0,0,0,0.8);
    font-size: 17px;
    margin-bottom: 7px;
`

export const MyIcon = styled.div`
    display: flex;
    align-items: center;
    color: gray;
    font-size: 17px;    
    padding-top:10px;
`
export const BtnModify = styled.button`
    width: 110px;
    height: 35px; 
    margin-left: auto;
    margin-right: 15px;
    background-color: white;
    border: 1px solid rgba(0,0,0,0.5);
    border-radius: 5px;

    &:hover {
        background-color: black;
        color: white;
    }
`

export const Label = styled.div`
    font-size: 15px;
    text-align: center;
    color: rgba(0,0,0,0.8);
`

export const MyPassword = styled.input`
    width: 200px;
    height: 25px;
    border: none;
    border-bottom: 1px solid gray;
    margin: 0 40px 0 10px;
`


export const PaymentWrapper = styled.div`
    width: 1000px;
    height: auto;
`

export const MembershipTable = styled.div`
    width: 100%;
    height: auto;
    margin: auto;
    background-color: rgba(97,127,183,0.9);
    color: white;
    border-radius: 5px;
    display:flex;
    align-items: center;
    justify-content: flex-start;
`
    
export const MembershipInfo = styled.div`
    width: 80px;
    padding-left: 20px;
`
export const MembershipLevel = styled.div`
    font-size: 14px;
    width: 210px;
    padding: 5px;
    display: flex;
    flex-direction: column;
`
export const DottedLine = styled.div`
    width: 200px;
    border-bottom: 2px dotted rgba(0,0,0,0.2);
`
export const Level = styled.div``
export const Coupon = styled.div`
   width: 185px;
   display: flex;
   margin-right: auto;
`

export const PaymentTable = styled.div`
    width: 100%;
    height: auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.4);
`

export const PaymentColumn = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;   
`

// 나의 구매내역  
export const MyPayTable = styled.div`
    width: 100%;
    height: auto;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.4);
    display: flex;

`
export const MyPayColumn1 = styled.div`
    width: 630px;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const MyPayColumn2 = styled.div`
    width: 190px;
    height: auto;
    border-left: 1px solid rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`



export const ProductProfile = styled.div`
    width: 120px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ProductDelivery = styled.div`
    width: 110px;
    height: 10px;
    font-size: 19px;
    font-weight: 600;
    color: #364D79;
    text-align: center;
`
export const Image = styled.div`
    width: 110px;
    height: 120px;
    background-image: url('/images/ppp.png');
    background-size: cover;
    background-position: center;
`

export const ProductInfo = styled.div`
    width: 400px;
    height: 175px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const ProductTitle = styled.div`
    font-size: 17px;
    font-weight: 500;
    padding-bottom: 8px;

`
export const ProductContent = styled.div`
    font-size: 14px;
    color: rgba(0,0,0,0.8);
    margin-bottom: 7px;
`
export const ProductPrice = styled.div`
    font-size: 15px;
    color: rgba(0,0,0,0.9);
    font-weight: 500;
`

export const ProductBtn = styled.button`
    width: 150px;
    height: 40px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 5px;
    background-color: white;
    font-weight: 500;
    font-size: 14px;

    &:hover{
        border: 2px solid #364D79;
    }
`

export const Menu = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #364d73;
    color: white;
    &:hover {
        background-color: white;
        color: black;
    }   
`
export const PaymentMessage = styled.div`
    font-size: 15px;
    margin-top: auto;
    color: rgba(0,0,0,0.9);
`

// 장바구니 테이블 -----------------------------
export const MyWishTitle = styled.div`
    padding: 20px;
    border-bottom: 2px dotted rgba(0,0,0,0.2);
`
export const MyWishTable = styled.table`
    width: 100%;
    height: auto;
    margin-top: 25px;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.4);
    text-align: center;   
    padding: 5px 5px 20px; 
`
export const ThTitle = styled.th`
    height: 33px;
    background-color: #829AC7;
    color: white;
    border-radius: 5px;
    font-weight: 500;
`
export const ThImage = styled.th`
    color: rgba(0,0,0,0.9);
    width: 130px;
    height: 50px;
    font-weight: 600;
`
export const ThInfo = styled.th`
    color: rgba(0,0,0,0.9);
    font-weight: 600;    
`


export const ThPrice = styled.th`
    color: rgba(0,0,0,0.9);
    width: 130px;
    font-weight: 600;
`
export const ThSelect = styled.th`
    color: rgba(0,0,0,0.9);
    font-weight: 600;
    width: 110px;

`
export const TdSummary = styled.td`
    font-size: 14px;
`
export const TdPrice = styled.td`
    font-size: 14px;
`
export const TdBtn = styled.button`
    cursor: pointer;
    width: 80px;
    height: 25px;
    background-color: #364D79;
    color: white;
    margin: 5px;
    border-radius: 2px;
    border: none;
    
    &:last-of-type{
        background-color: white;
        border: 1px solid #364D79;
        color: black;
    }
`

// 즐겨찾기 작가 테이블 -------------------------
export const MyArtistTable = styled.table`
    width: 500px;
    height: auto;
    display: flex;
    
    align-items: center;
`

export const TdPlus = styled.td`
    width: 80px;
    padding: 3px;
    border: 2px solid orange;
    border-radius: 5px;
    text-align: center;
`
export const TdProfile = styled.td`
    font-size: 13px;
`

export const TdSns = styled.td`
    width: 290px;
`

// 나의문의 테이블 ------------------------
export const ServiceTable = styled.table`
    width: 100%;
    height: auto;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.4);
    text-align: center;
    padding: 5px;
`

export const TdHelpContent = styled.td`
    width: 610px;
    height: 28px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
`
export const TdHelpDate = styled.td`
    border-bottom: 1px solid rgba(0,0,0,0.2);
`




