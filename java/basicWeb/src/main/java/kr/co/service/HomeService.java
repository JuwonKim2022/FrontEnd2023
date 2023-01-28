package kr.co.service;

import java.util.List;

//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;

import kr.co.vo.HomeVO;

public interface HomeService {

	//게시물 목록 조회
	public List<HomeVO> list() throws Exception;
	
	//게시글 작성
	public void register(HomeVO homeVO) throws Exception;
	
	//게시물 삭제
	public void delete(int bno) throws Exception;
	
	//게시물 목록 조회
	public HomeVO read(int bno) throws Exception;
	
	//액셀다운
//	public void getReserveExcel(HomeVO homeVO, HttpServletRequest request, HttpServletResponse response) throws Exception;
}
