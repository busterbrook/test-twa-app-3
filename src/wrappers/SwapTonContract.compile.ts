import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/swap_ton_contract.tact',
    options: {
        debug: true,
    },
};
