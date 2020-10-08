export class About extends React.Component {
    state = {
        img: './assets/img/about1.svg'
    }
    inter = null;

    componentDidMount() {
        console.log("About page is on")
        this.inter = setInterval(() => {
            if (this.state.img === './assets/img/about1.svg') this.setState({ img: './assets/img/about2.svg' })
            else this.setState({ img: './assets/img/about1.svg' })
        }, 4000)
    }

    componentWillUnmount() {
        clearInterval(this.inter)
        this.inter = null;
        console.log("About page is down...")
    }


    render() {
        return <section className="about">
            <h2 className="animate__animated animate__backInDown">About this app</h2>
            <p className="animate__animated animate__backInUp">Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adip</p>
            {/* <img src="./assets/img/about1.svg"></img> */}
            <img src={this.state.img}></img>
        </section>
    }
}