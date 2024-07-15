import React from 'react';

const OrderPage: React.FC = () => {
    return (
        <div>
            <h1>Order Food</h1>
            <p>Select your favourite dishes and place your order.</p>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Address:
                    <input type="text" name="address" />
                </label>
                <br />
                <label>
                    Phone:
                    <input type="tel" name="phone" />
                </label>
                <br />
                <button type="submit">Order</button>
            </form>
        </div>
    );
}

export default OrderPage;