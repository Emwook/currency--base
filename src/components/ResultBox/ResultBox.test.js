import { render, screen, cleanup } from "@testing-library/react";
import ResultBox from "./ResultBox";
import '@testing-library/jest-dom';
import { convertPLNToUSD } from "../../utils/convertPLNToUSD";
import { convertUSDToPLN } from "../../utils/convertUSDToPLN";


const testCases = [
    { amount: '100'},
    { amount: '20'},
    { amount: '200'},
    { amount: '345'},
  ];

describe('Component ResultBox', () => {
    for(const testObj of testCases){
        it('should render proper info about conversion when PLN -> USD', ()=>{
            render(<ResultBox from="PLN" to="USD" amount={testObj.amount} />);
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent(convertPLNToUSD(testObj.amount));
        })
        cleanup()
        it('should render proper info about conversion when USD -> PLN', ()=>{
            render(<ResultBox from="USD" to="PLN" amount={testObj.amount} />);
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent(convertUSDToPLN(testObj.amount));
        })
        cleanup()
        it('should render proper info about conversion when USD -> USD', ()=>{
            render(<ResultBox from="USD" to="USD" amount={testObj.amount} />);
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent(`$${(testObj.amount)}.00 = $${(testObj.amount)}.00`);
        })
        cleanup()
        it('should render proper info about conversion when PLN -> PLN', ()=>{
            render(<ResultBox from="PLN" to="PLN" amount={testObj.amount} />);
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent(`PLN ${(testObj.amount)}.00 = PLN ${(testObj.amount)}.00`);
        })
        cleanup()
    }
    it('should render "Wrong value..." when negative value is passed', ()=>{
        render(<ResultBox from="PLN" to="USD" amount={-100} />);
        const output = screen.getByTestId('output');
        expect(output).toHaveTextContent("Wrong value...");
    })
});