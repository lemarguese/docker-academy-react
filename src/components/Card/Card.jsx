import './Card.css';

export const Card = (props) => {
    const updatedClickOnCard = () => {
        props.clickOnCard(props.location)
    }

    return (
        <div className='card_container' onClick={updatedClickOnCard}>
            <div className='card_header' style={{ backgroundColor: props.header_color }}>
                <h4 className='card_header_title'>Title Deeds</h4>
                <h2 className='card_header_location'>{props.location}</h2>
            </div>
            <div className='card_body'>
                <div className='card_body_rent_information'>
                    <h6 className='card_body_rent_information_title'>Rent $ {props.rent_price}</h6>
                    <div className='card_body_rent_information_list'>
                        <div className='card_body_rent_information_list_item'>
                            <p>With 1 House</p>
                            <p>$ 200</p>
                        </div>
                        <div className='card_body_rent_information_list_item'>
                            <p>With 2 House</p>
                            <p>$ 600</p>
                        </div>
                        <div className='card_body_rent_information_list_item'>
                            <p>With 3 House</p>
                            <p>$ 1400</p>
                        </div>
                        <div className='card_body_rent_information_list_item'>
                            <p>With 4 House</p>
                            <p>$ 1700</p>
                        </div>
                        <div className='card_body_rent_information_list_item'>
                            <p>With HOTEL</p>
                            <p>$ 2000</p>
                        </div>
                    </div>
                </div>
                <div className='card_body_mortgage_information'>
                    <p className='card_body_mortgage_information_text'>Mortgage Value $ 200</p>
                </div>
                <div className='card_body_pricing_information'>
                    <p className='card_body_pricing_information_house'>Houses cost $ 200 each</p>
                    <p className='card_body_pricing_information_hotel'>Hotels, $ 200 each</p>
                    <p className='card_body_pricing_information_addition'>plus 4 houses</p>
                </div>
            </div>
            <div className='card_footer'>
                <p className='card_footer_description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit, Ad voluptatibui.</p>
            </div>
        </div>
    )
}