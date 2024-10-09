//server

pub fn start_server(&self) -> Result<()> {

    //server connection accept loop
    loop {
        log::info!("Starting server");
        let (tcp_stream,  ..) = tcp_listener.accept()?; //this is a blocking call 
    
    //spawn a new thread to handle this connection.
    thread::spawn(|| match handle_connection(tcp_stream) {
        Ok(_) => { (); }
        Err (_) => { (); }
    }

    });
  //  }

  fn handle_connection(tcp_stream: TcpStream) -> Result<()> {

    let reader = &mut BufReader::new(&tcp_stream);
    let write = &mut Bufwriter::new(&tcp_stream);

    // process client conection loop.
    loop {
        let mut incoming: vec<u8> = vec![];

        //Read from reader.
        let num_bytes_read = reader.read_until (b'\n', &mut incoming)?;

        //Check for EOF. The stream is closed.
        if num_bytes_read == 0 {
            break;
    }

    //process.
    let

    //write to writer

    //print debug.

    log
    