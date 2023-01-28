package kr.co.dao;

import java.util.List;

import kr.co.vo.HomeVO;

public interface HomeDAO {

	//게시물 목록 조회
	public List<HomeVO> list() throws Exception;
	
	//게시글 작성
	public void register(HomeVO homeVO) throws Exception;
	
	//게시물 삭제
	public void delete(int bno) throws Exception;
	
	//게시물 조회
	public HomeVO read(int bno) throws Exception;
	
	//액셀 다운
//	public List<HomeVO> getReserveExcel(HomeVO homeVO);

}
