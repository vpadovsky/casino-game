import React from 'react';
import GameList from './containers/GameList';
import SlotMachine from './containers/SlotMachine';
import CurrencyConverter from './containers/CurrencyConverter';
import Header from "./components/Header";

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4 container mx-auto">
            <Header/>
            <main>
                <GameList/>
                <SlotMachine/>
                <CurrencyConverter/>
            </main>
        </div>
    );
};

export default App;
