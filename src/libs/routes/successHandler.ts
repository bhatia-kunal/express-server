const successHandler = (message: string, status: number, data: any) => ({
    Message: message,
    Status: status,
    Data: data
})

export default successHandler;