package kr.co.service;

//import java.text.SimpleDateFormat;
import java.util.List;

import javax.inject.Inject;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Service;

import kr.co.dao.HomeDAO;
import kr.co.vo.HomeVO;

//import org.apache.poi.hssf.util.HSSFColor;
//import org.apache.poi.ss.usermodel.Cell;
//import org.apache.poi.ss.usermodel.CellStyle;
//import org.apache.poi.ss.usermodel.Font;
//import org.apache.poi.ss.usermodel.Row;
//import org.apache.poi.ss.usermodel.Sheet;
//import org.apache.poi.ss.util.CellRangeAddress;
//import org.apache.poi.xssf.streaming.SXSSFWorkbook;

@Service
public class HomeServiceImpl implements HomeService {
	
	@Inject
	private HomeDAO dao;
	
	//게시물 목록 조회
	@Override
	public List<HomeVO> list() throws Exception {
		return dao.list();
	}
	
	// 게시글 작성
	@Override
	public void register(HomeVO homeVO) throws Exception {
		dao.register(homeVO);
	}
	
	// 게시물 삭제
	@Override
	public void delete(int bno) throws Exception {
		dao.delete(bno);
	}
	
	//게시물 목록 조회
	@Override
	public HomeVO read(int bno) throws Exception {
		return dao.read(bno);
	}

	//액셀 다운
//	private void setHeaderCS(CellStyle cs, Font font, Cell cell) {
//	  cs.setAlignment(CellStyle.ALIGN_CENTER);
//	  cs.setVerticalAlignment(CellStyle.VERTICAL_CENTER);
//	  cs.setBorderTop(CellStyle.BORDER_THIN);
//	  cs.setBorderBottom(CellStyle.BORDER_THIN);
//	  cs.setBorderLeft(CellStyle.BORDER_THIN);
//	  cs.setBorderRight(CellStyle.BORDER_THIN);
//	  cs.setFillForegroundColor(HSSFColor.GREY_80_PERCENT.index);
//	  cs.setFillPattern(CellStyle.SOLID_FOREGROUND);
//	  setHeaderFont(font, cell);
//	  cs.setFont(font);
//	  cell.setCellStyle(cs);
//	}
//	 
//	private void setHeaderFont(Font font, Cell cell) {
//	  font.setBoldweight((short) 700);
//	  font.setColor(HSSFColor.WHITE.index);
//	}
//	 
//	private void setCmmnCS2(CellStyle cs, Cell cell) {
//	  cs.setAlignment(CellStyle.ALIGN_LEFT);
//	  cs.setVerticalAlignment(CellStyle.VERTICAL_CENTER);
//	  cs.setBorderTop(CellStyle.BORDER_THIN);
//	  cs.setBorderBottom(CellStyle.BORDER_THIN);
//	  cs.setBorderLeft(CellStyle.BORDER_THIN);
//	  cs.setBorderRight(CellStyle.BORDER_THIN);
//	  cell.setCellStyle(cs);
//	}
//	 
//	 
//	@Override
//	public void getReserveExcel(HomeVO homeVO, HttpServletRequest request, HttpServletResponse response) throws Exception {
//	List<HomeVO> list = dao.getReserveExcel(homeVO);;
//	  
//	  SXSSFWorkbook wb = new SXSSFWorkbook();
//	  Sheet sheet = wb.createSheet();
//	  sheet.setColumnWidth((short) 0, (short) 2000);
//	  sheet.setColumnWidth((short) 1, (short) 2000);
//	  sheet.setColumnWidth((short) 2, (short) 1000);
//	  sheet.setColumnWidth((short) 3, (short) 8000);
//	  sheet.setColumnWidth((short) 4, (short) 8000);
//	  sheet.setColumnWidth((short) 5, (short) 5000);
//	  
//	  Row row = sheet.createRow(0);
//	  Cell cell = null;
//	  CellStyle cs = wb.createCellStyle();
//	  Font font = wb.createFont();
//	  cell = row.createCell(0);
//	  cell.setCellValue("예약신청 관리 - 예약신청 리스트");
//	  setHeaderCS(cs, font, cell);
//	  sheet.addMergedRegion(new CellRangeAddress(row.getRowNum(), row.getRowNum(), 0, 6));
//	  
//	  row = sheet.createRow(0);
//	  cell = null;
//	  cs = wb.createCellStyle();
//	  font = wb.createFont();
//	  
//	  cell = row.createCell(0);
//	  cell.setCellValue("id");
//	  setHeaderCS(cs, font, cell);
//	 
//	  cell = row.createCell(1);
//	  cell.setCellValue("name");
//	  setHeaderCS(cs, font, cell);
//	  
//	  cell = row.createCell(2);
//	  cell.setCellValue("sex");
//	  setHeaderCS(cs, font, cell);
//	  
//	  cell = row.createCell(3);
//	  cell.setCellValue("country");
//	  setHeaderCS(cs, font, cell);
//	  
//	  cell = row.createCell(4);
//	  cell.setCellValue("city");
//	  setHeaderCS(cs, font, cell);
//	  
//	  cell = row.createCell(5);
//	  cell.setCellValue("regdate");
//	  setHeaderCS(cs, font, cell);
//	 
//	 
//	  int i = 2;
//	  for (HomeVO vo : list) {
//	      
//			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//			String cretDate = sdf.format(vo.getRegdate());
//	 
//		  row = sheet.createRow(i);
//		  cell = null;
//		  cs = wb.createCellStyle();
//		  font = wb.createFont();
//		 
//		  cell = row.createCell(0);
//		  cell.setCellValue(vo.getId());
//		  setCmmnCS2(cs, cell);
//		  
//		  cell = row.createCell(1);
//		  cell.setCellValue(vo.getName());
//		  setCmmnCS2(cs, cell);
//		  
//		  cell = row.createCell(2);
//		  cell.setCellValue(vo.getSex());
//		  setCmmnCS2(cs, cell);
//		  
//		  cell = row.createCell(3);
//		  cell.setCellValue(vo.getCountry());
//		  setCmmnCS2(cs, cell);
//		  
//		  cell = row.createCell(4);
//		  cell.setCellValue(vo.getCity());
//		  setCmmnCS2(cs, cell);
//		  
//		  cell = row.createCell(5);
//		  cell.setCellValue(vo.getRegdate());
//		  setCmmnCS2(cs, cell);
//		  
//		  i++;
//	  };
//	  
//	  response.setHeader("Set-Cookie", "fileDownload=true; path=/");
//	  response.setHeader("Content-Disposition", String.format("attachment; filename=\"ReserveManageList.xlsx\""));
//	  wb.write(response.getOutputStream());
//	 
//	}

}
