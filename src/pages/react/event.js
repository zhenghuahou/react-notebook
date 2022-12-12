import  React from "react";


// https://juejin.cn/post/6844903988794671117
class FuckEvent extends React.PureComponent {
  state = {
    showBox: false
  }
  componentDidMount() {
    document.body.addEventListener('click', this.handleClickBody, false)
  }
  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleClickBody, false)
  }
  handleClickBody = (e) => {
    console.info(e,'[handleClickBody 点击body] this.state.showBox:',this.state.showBox,performance.now().toFixed(2))
    this.setState({
      showBox: false
    })
  }
  handleClickButton = (e) => {
    e.stopPropagation();//需要
    console.info(e,'[handleClickButton 点击按钮] this.state.showBox:',this.state.showBox,performance.now().toFixed(2))
    this.setState({
      showBox: true
    })
  }

  render() {
    // console.info('[render] this.state.showBox:',this.state.showBox)
    return (
      <div>
        <img className="img-auto"  src="http://chuantu.xyz/t6/742/1670823799x2890387995.png"></img>
        <button onClick={this.handleClickButton}>点击我显示弹窗1</button><br></br>
        <button onClick={this.handleClickButton}>点击我显示弹窗2</button>
        {this.state.showBox && (
          <div>我是弹窗</div>
        )}
      </div>
    )
  }
}

export default FuckEvent