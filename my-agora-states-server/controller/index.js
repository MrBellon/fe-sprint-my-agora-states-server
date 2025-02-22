const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
    return res.stauts(404).end();
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    const {id} = req.params;
    if(id) {
      let data = discussionsData;
      // req.params.id -> 문자를 *1을 통해 숫자로 바꿈
      data = data.filter((item) => item.id === (req.params.id)*1)
      if(data.length !== 0) { // 빈배열 아니라면
        return res.status(200).json(data[0]) //filter는 배열을 리턴 그 배열에서 원하는 데이터를 가져오기 위해 인덱스 0
      } else return res.status(404).end()
    }
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
  },
};

module.exports = {
  discussionsController,
};
