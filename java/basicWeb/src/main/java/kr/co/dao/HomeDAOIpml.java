package kr.co.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.vo.HomeVO;

@Repository
public class HomeDAOIpml implements HomeDAO {
	
	@Inject
	private SqlSession sqlSession;

	//게시물 목록 조회
	@Override
	public List<HomeVO> list() throws Exception {
		return sqlSession.selectList("homeMapper.list");
	}
	
	//게시글 작성
	@Override
	public void register(HomeVO homeVO) throws Exception {
		sqlSession.insert("homeMapper.register", homeVO);
	}
	
	//게시물 삭제
	@Override
	public void delete(int bno) throws Exception {
		sqlSession.delete("homeMapper.delete", bno);
	}
	
	//게시물 조회
	@Override
	public HomeVO read(int bno) throws Exception {
			
		return sqlSession.selectOne("homeMapper.read", bno);
	}
	
	//엑셀 다운
//	public List<HomeVO> getReserveExcel(HomeVO homeVO) {
//    return sqlSession.selectList("getReserveExcel", homeVO);
//	}

	
}
