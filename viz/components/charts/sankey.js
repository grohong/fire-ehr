import React, {
  Component
} from "react"
import {
  Chart
} from "react-google-charts"

class SankeyChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: this.props.options ?
        this.props.options : {
          title: "Lengths of dinosaurs, in meters",
          legend: {
            position: "none"
          }
        },
      data: this.props.data ?
        this.props.data : [
          ["To", "From", "Count"],
          ["응급실", "데이터없음", 268],
          ["응급실", "11.증상이 호전되어 귀가", 1],
          ["응급실", "11.증상이 호전되어 귀가", 323],
          ["응급실", "12.말기질환으로 귀가(가정간호 등)", 1],
          ["응급실", "14.자의퇴원", 3],
          ["응급실", "14.자의퇴원", 3],
          ["응급실", "15.외래방문 후 귀가", 3],
          ["응급실", "18.기타 다른 상태로 귀가", 23],
          ["응급실", "21.병실부족전원", 13],
          ["응급실", "22.중환자실 부족 전원", 3],
          ["응급실", "23.당장 응급수술/처치 불가 전원", 1],
          ["응급실", "27.환자 사정으로 전원", 2],
          ["응급실", "28.기타 다른 사유로 전원", 1],
          ["응급실", "31.일반병실로 입원", 182],
          ["응급실", "32.중환자실로 입원", 44],
          ["응급실", "33.수술실로 간후 병실로 입원", 1],
          ["응급실", "34.수술실로 간후 중환자실로 입원", 1],
          ["응급실", "34.수술실로 간후 중환자실로 입원", 2],
          ["응급실", "41.내원시 이미 사망한 상태(DOA)", 3],
          ["응급실", "43.응급실에서 CPR후 사망", 1],
          ["데이터없음", "없음", 148],
          ["데이터없음", "감염내과", 2],
          ["데이터없음", "내분비내과", 1],
          ["데이터없음", "노년내과", 1],
          ["데이터없음", "비뇨의학과", 2],
          ["데이터없음", "산부인과", 4],
          ["데이터없음", "소화기내과", 20],
          ["데이터없음", "신경과", 9],
          ["데이터없음", "신경외과", 8],
          ["데이터없음", "신장내과", 3],
          ["데이터없음", "심장내과", 25],
          ["데이터없음", "어린이병원 소아신생아과", 1],
          ["데이터없음", "이비인후과", 1],
          ["데이터없음", "일반외과", 10],
          ["데이터없음", "정신건강의학과", 5],
          ["데이터없음", "정형외과", 5],
          ["데이터없음", "종양내과", 6],
          ["데이터없음", "호흡기 내과", 15],
          ["데이터없음", "흉부외과", 2],
          ["11.증상이 호전되", "없음", 1],
          ["11.증상이 호전되어 귀가", "없음", 322],
          ["11.증상이 호전되어 귀가", "이비인후과", 1],
          ["12.말기질환으로 귀가(가정간호 등)", "없음", 1],
          ["14.자의퇴원", "없음", 3],
          ["14.자의퇴원", "없음", 3],
          ["15.외래방문 후 귀가", "없음", 3],
          ["18.기타 다른 상태로 귀가", "없음", 22],
          ["18.기타 다른 상태로 귀가", "정형외과", 1],
          ["21.병실부족전원", "없음", 12],
          ["21.병실부족전원", "종양내과", 1],
          ["22.중환자실 부족 전원", "없음", 3],
          ["23.당장 응급수술/처치 불가 전원", "없음", 1],
          ["27.환자 사정으로 전원", "없음", 2],
          ["28.기타 다른 사유로 전원", "종양내과", 1],
          ["31.일반병실로 입원", "없음", 2],
          ["31.일반병실로 입원", "간담도췌외과", 2],
          ["31.일반병실로 입원", "간이식및간담도외과", 5],
          ["31.일반병실로 입원", "감염내과", 3],
          ["31.일반병실로 입원", "내분비내과", 3],
          ["31.일반병실로 입원", "대장항문외과", 4],
          ["31.일반병실로 입원", "류마티스내과", 1],
          ["31.일반병실로 입원", "비뇨의학과", 1],
          ["31.일반병실로 입원", "산부인과", 1],
          ["31.일반병실로 입원", "성형외과", 1],
          ["31.일반병실로 입원", "소화기내과", 45],
          ["31.일반병실로 입원", "신경과", 12],
          ["31.일반병실로 입원", "신경외과", 6],
          ["31.일반병실로 입원", "신장내과", 11],
          ["31.일반병실로 입원", "심장내과", 22],
          ["31.일반병실로 입원", "어린이병원 소아심장과", 5],
          ["31.일반병실로 입원", "일반외과", 12],
          ["31.일반병실로 입원", "정신건강의학과", 1],
          ["31.일반병실로 입원", "정형외과", 5],
          ["31.일반병실로 입원", "종양내과", 21],
          ["31.일반병실로 입원", "혈관외과", 1],
          ["31.일반병실로 입원", "혈액내과", 5],
          ["31.일반병실로 입원", "호흡기 내과", 11],
          ["31.일반병실로 입원", "흉부외과", 2],
          ["32.중환자실로 입원", "ACU", 7],
          ["32.중환자실로 입원", "류마티스내과", 1],
          ["32.중환자실로 입원", "소화기내과", 1],
          ["32.중환자실로 입원", "신경과", 3],
          ["32.중환자실로 입원", "신경외과", 4],
          ["32.중환자실로 입원", "신장내과", 1],
          ["32.중환자실로 입원", "심장내과", 18],
          ["32.중환자실로 입원", "어린이병원 소아심장과", 3],
          ["32.중환자실로 입원", "종양내과", 2],
          ["32.중환자실로 입원", "호흡기 내과", 3],
          ["32.중환자실로 입원", "흉부외과", 1],
          ["33.수술실로 간후 병실로 입원", "일반외과", 1],
          ["34.수술실로 간후 중환자실로 입원", "심장내과", 1],
          ["34.수술실로 간후 중환자실로 입원", "종양내과", 1],
          ["34.수술실로 간후 중환자실로 입원", "흉부외과", 1],
          ["41.내원시 이미 사망한 상태(DOA)", "없음", 3],
          ["43.응급실에서 CPR후 사망", "없음", 1]
        ],
      chartPackages: ["sankey"]
    }
  }

  renderSankey = () => {
    return ( <
      Chart chartType = "Sankey"
      data = {
        this.state.data
      }
      options = {
        this.state.options
      }
      graph_id = "Sankey"
      width = "100%"
      height = "500px"
      chartEvents = {
        this.props.chartEvents
      }
      chartPackages = {
        this.state.chartPackages
      }
      legend_toggle /
      >
    )
  }

  render() {
    return <div > {
      this.renderSankey()
    } < /div>
  }
}

export default SankeyChart