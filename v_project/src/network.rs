use async_std::net::{TcpListener, TcpStream};
//use async_std::prelude::*;
use futures::stream::StreamExt;

//lstnr

pub async fn start_network_listener(addr: &str) ->
std::io::Result<()> {
    let listener = TcpListener::bind(addr).await?;

    let mut incoming = listener.incoming();
    while let Some(stream) = incoming.next().await {
        match stream {
            Ok(stream) => {
                handle_connection(stream).await;
            }
            Err(e) => eprintln!("Accept failed: {:?}",e)
        }
    }
    Ok (())
}

async fn handle_connection(stream:TcpStream) {
println!("Accepted from: {}", stream.peer_addr().unwrap());
}

//cnnct

pub async fn start_network_connector(addr: &str) ->
std::io::Result<()> {
    let stream = TcpStream::connect(addr).await?;
    handle_connection(stream).await;
    Ok(())
}

