interface ITime {
    year: number;
    month: number;
    date: number;
    hour: string;
    minute: string;
    second: string;
    meridium: string;
}

interface ITimeContext {
    date : ITime,
    setTime : (t : ITime) => void,
}