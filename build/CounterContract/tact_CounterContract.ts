import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw);
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type SendTonWithAddress = {
    $$type: 'SendTonWithAddress';
    amountTon: bigint;
    takerAddress: Address;
}

export function storeSendTonWithAddress(src: SendTonWithAddress) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(25803036, 32);
        b_0.storeCoins(src.amountTon);
        b_0.storeAddress(src.takerAddress);
    };
}

export function loadSendTonWithAddress(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 25803036) { throw Error('Invalid prefix'); }
    let _amountTon = sc_0.loadCoins();
    let _takerAddress = sc_0.loadAddress();
    return { $$type: 'SendTonWithAddress' as const, amountTon: _amountTon, takerAddress: _takerAddress };
}

function loadTupleSendTonWithAddress(source: TupleReader) {
    let _amountTon = source.readBigNumber();
    let _takerAddress = source.readAddress();
    return { $$type: 'SendTonWithAddress' as const, amountTon: _amountTon, takerAddress: _takerAddress };
}

function storeTupleSendTonWithAddress(source: SendTonWithAddress) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amountTon);
    builder.writeAddress(source.takerAddress);
    return builder.build();
}

function dictValueParserSendTonWithAddress(): DictionaryValue<SendTonWithAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendTonWithAddress(src)).endCell());
        },
        parse: (src) => {
            return loadSendTonWithAddress(src.loadRef().beginParse());
        }
    }
}

export type SendTonToOurBalance = {
    $$type: 'SendTonToOurBalance';
    amountTon: bigint;
}

export function storeSendTonToOurBalance(src: SendTonToOurBalance) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3573853958, 32);
        b_0.storeCoins(src.amountTon);
    };
}

export function loadSendTonToOurBalance(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3573853958) { throw Error('Invalid prefix'); }
    let _amountTon = sc_0.loadCoins();
    return { $$type: 'SendTonToOurBalance' as const, amountTon: _amountTon };
}

function loadTupleSendTonToOurBalance(source: TupleReader) {
    let _amountTon = source.readBigNumber();
    return { $$type: 'SendTonToOurBalance' as const, amountTon: _amountTon };
}

function storeTupleSendTonToOurBalance(source: SendTonToOurBalance) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amountTon);
    return builder.build();
}

function dictValueParserSendTonToOurBalance(): DictionaryValue<SendTonToOurBalance> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendTonToOurBalance(src)).endCell());
        },
        parse: (src) => {
            return loadSendTonToOurBalance(src.loadRef().beginParse());
        }
    }
}

export type LoadBalanceContract = {
    $$type: 'LoadBalanceContract';
    amount: bigint;
}

export function storeLoadBalanceContract(src: LoadBalanceContract) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1792196555, 32);
        b_0.storeUint(src.amount, 32);
    };
}

export function loadLoadBalanceContract(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1792196555) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadUintBig(32);
    return { $$type: 'LoadBalanceContract' as const, amount: _amount };
}

function loadTupleLoadBalanceContract(source: TupleReader) {
    let _amount = source.readBigNumber();
    return { $$type: 'LoadBalanceContract' as const, amount: _amount };
}

function storeTupleLoadBalanceContract(source: LoadBalanceContract) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    return builder.build();
}

function dictValueParserLoadBalanceContract(): DictionaryValue<LoadBalanceContract> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeLoadBalanceContract(src)).endCell());
        },
        parse: (src) => {
            return loadLoadBalanceContract(src.loadRef().beginParse());
        }
    }
}

 type CounterContract_init_args = {
    $$type: 'CounterContract_init_args';
}

function initCounterContract_init_args(src: CounterContract_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
    };
}

async function CounterContract_init() {
    const __code = Cell.fromBase64('te6ccgECFgEABGIAART/APSkE/S88sgLAQIBYgIDApLQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zzy4IIwyPhDAcx/AcoAye1UDgQCASAMDQTw7aLt+wGSMH/gcCHXScIflTAg1wsf3iCCEGrSv8u64wIgggmJuRy6jsMw0x8BggmJuRy68uCB+gD6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIEmwSfwKCCAYagKASchAjbW1t2zx/4CCCENUErwa64wIgBQoGBwC4MNMfAYIQatK/y7ry4IHTHwExMIvGxvYWQgc3VjY2Vzc4jQxW0RFQlVHXSBGaWxlIGNvbnRyYWN0cy9jb3VudGVyX2NvbnRyYWN0LnRhY3Q6Mjk6OYP4UMP4UMH8BkDDTHwGCENUErwa68uCB+gABMY0IYAMN5PIpDnkojHhUzw8muFFxWT5aVEHw3VxOS3u4qdHyXH8CgggGGoCgEnIQI21tbds8fwoCcoIQlGqYtrqOqDDTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH/gwACRMOMNcAgJATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPAoB1vkBgvCgakE8IAt9FIZNJ5ZCBD2uw6Us4hsosf/RdvbbvXFpQbqOw40IYAMN5PIpDnkojHhUzw8muFFxWT5aVEHw3VxOS3u4qdHyXH/4J28Q+EFvJBNfA6GCCTEtAKGAQhAjbW1t2zx/2zHgCgHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wALAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAg+/SM7Z5tnhjA4PAgEgEhMBNO1E0NQB+GPSADCRbeD4KNcLCoMJuvLgids8EAEO+CdvEHnbPBEAAm0A2iDBASHCTbHy0IbIIsEAmIAtAcsHAqMC3n9wbwAEjhsEeqkMIMAAUjCws5twM6YwFG+MBKQEA5Ew4gTkAbOXAoAub4wCpN6OEAN6qQymMBNvjAOkIsAAEDTmMyKlA5pTEm+BAcsHAqUC5GwhydAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAIBSBQVABGwr7tRNDSAAGAAdbJu40NWlwZnM6Ly9RbVRHZmNzVTFqdVM2OHZvek1UUm1WUE1OdkxGWGlURXRHVExmRHU1YXBmRmtjgg');
    const __system = Cell.fromBase64('te6cckECGAEABGwAAQHAAQEFoI+VAgEU/wD0pBP0vPLICwMCAWIEDQKS0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wds88uCCMMj4QwHMfwHKAMntVA8FBPDtou37AZIwf+BwIddJwh+VMCDXCx/eIIIQatK/y7rjAiCCCYm5HLqOwzDTHwGCCYm5HLry4IH6APpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgSbBJ/AoIIBhqAoBJyECNtbW3bPH/gIIIQ1QSvBrrjAiAGCwcIALgw0x8BghBq0r/LuvLggdMfATEwi8bG9hZCBzdWNjZXNziNDFbREVCVUddIEZpbGUgY29udHJhY3RzL2NvdW50ZXJfY29udHJhY3QudGFjdDoyOTo5g/hQw/hQwfwGQMNMfAYIQ1QSvBrry4IH6AAExjQhgAw3k8ikOeSiMeFTPDya4UXFZPlpUQfDdXE5Le7ip0fJcfwKCCAYagKASchAjbW1t2zx/CwJyghCUapi2uo6oMNMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+DAAJEw4w1wCQoBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8CwHW+QGC8KBqQTwgC30Uhk0nlkIEPa7DpSziGyix/9F29tu9cWlBuo7DjQhgAw3k8ikOeSiMeFTPDya4UXFZPlpUQfDdXE5Le7ip0fJcf/gnbxD4QW8kE18DoYIJMS0AoYBCECNtbW3bPH/bMeALAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAwAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwCASAOEwIPv0jO2ebZ4YwPEQE07UTQ1AH4Y9IAMJFt4Pgo1wsKgwm68uCJ2zwQAAJtAQ74J28Qeds8EgDaIMEBIcJNsfLQhsgiwQCYgC0BywcCowLef3BvAASOGwR6qQwgwABSMLCzm3AzpjAUb4wEpAQDkTDiBOQBs5cCgC5vjAKk3o4QA3qpDKYwE2+MA6QiwAAQNOYzIqUDmlMSb4EBywcCpQLkbCHJ0AIBIBQVALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgCAUgWFwARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1UR2Zjc1UxanVTNjh2b3pNVFJtVlBNTnZMRlhpVEV0R1RMZkR1NWFwZkZrY4ILMzHJA=');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initCounterContract_init_args({ $$type: 'CounterContract_init_args' })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const CounterContract_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack underflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
}

const CounterContract_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"SendTonWithAddress","header":25803036,"fields":[{"name":"amountTon","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"takerAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"SendTonToOurBalance","header":3573853958,"fields":[{"name":"amountTon","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"LoadBalanceContract","header":1792196555,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":32}}]},
]

const CounterContract_getters: ABIGetter[] = [
    {"name":"contractAmount","arguments":[],"returnType":{"kind":"simple","type":"string","optional":false}},
]

const CounterContract_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"LoadBalanceContract"}},
    {"receiver":"internal","message":{"kind":"typed","type":"SendTonWithAddress"}},
    {"receiver":"internal","message":{"kind":"typed","type":"SendTonToOurBalance"}},
    {"receiver":"internal","message":{"kind":"text","text":"withdrawCommisionSafe"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class CounterContract implements Contract {
    
    static async init() {
        return await CounterContract_init();
    }
    
    static async fromInit() {
        const init = await CounterContract_init();
        const address = contractAddress(0, init);
        return new CounterContract(address, init);
    }
    
    static fromAddress(address: Address) {
        return new CounterContract(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  CounterContract_types,
        getters: CounterContract_getters,
        receivers: CounterContract_receivers,
        errors: CounterContract_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: LoadBalanceContract | SendTonWithAddress | SendTonToOurBalance | 'withdrawCommisionSafe' | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'LoadBalanceContract') {
            body = beginCell().store(storeLoadBalanceContract(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SendTonWithAddress') {
            body = beginCell().store(storeSendTonWithAddress(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SendTonToOurBalance') {
            body = beginCell().store(storeSendTonToOurBalance(message)).endCell();
        }
        if (message === 'withdrawCommisionSafe') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getContractAmount(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('contractAmount', builder.build())).stack;
        let result = source.readString();
        return result;
    }
    
}