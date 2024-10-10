import './header.css';

function Header(){
    return (
        <header>
            <div className="header">
                <form>
                    <label for="checkin">Check In:</label>
                    <input type="date" id="checkin" name="checkin" required />

                    <label for="checkout">Check Out:</label>
                    <input type="date" id="checkout" name="checkout" required />

                    <label for="adults">Adultos:</label>
                    <select id="adults" name="adults" required>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>

                    <label for="children">Niños:</label>
                    <select id="children" name="children">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>

                    <button type="submit">Buscar</button>

                </form>
            </div>
        </header>
    );
}

export default Header;