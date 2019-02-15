const successHandler = (message: string, status: number, data: any) => ({
    Data: data,
    Message: message,
    Status: status,
});

export default successHandler;
