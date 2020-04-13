import app from './app';

const server = app.listen(app.get("port"), ()=>{

    console.log(
        "App is running on port: %d in env: %f ",
        app.get("port"),
        app.get("env")
    );

});

export default server;