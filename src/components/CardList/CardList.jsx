import './CardList.css';
import { Card } from '../Card/Card';

export const CardList = () => {
    const clickOnCard = (card_location) => {
        alert('You clicked on a ' + card_location)
    }

    return (
        <div className="card_list">
            <Card location="Queens Ave." rent_price={4} header_color={'brown'} clickOnCard={clickOnCard} />
            <Card location="Faulkner Street" rent_price={8} header_color={'lightblue'} clickOnCard={clickOnCard} />
            <Card location="Panton Place" rent_price={15} header_color={'crimson'} clickOnCard={clickOnCard} />
            <Card location="Pipers Lane" rent_price={20} header_color={'orange'} clickOnCard={clickOnCard} />
            <Card location="Oaklea Ave." rent_price={25} header_color={'red'} clickOnCard={clickOnCard}/>
            <Card location="Linden Grove" rent_price={30} header_color={'yellow'} clickOnCard={clickOnCard}/>
            <Card location="Park Drive" rent_price={40} header_color={'green'} clickOnCard={clickOnCard}/>
            <Card location="Walker Street" rent_price={50} header_color={'darkblue'} clickOnCard={clickOnCard} />
        </div>
    )
}