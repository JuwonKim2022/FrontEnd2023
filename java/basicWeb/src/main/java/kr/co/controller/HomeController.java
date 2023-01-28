package kr.co.controller;

import javax.inject.Inject;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
//import org.springframework.ui.ModelMap;
//import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import kr.co.service.HomeService;
import kr.co.vo.HomeVO;

@Controller
@RequestMapping("/*")
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@Inject
	HomeService service;
	
	//글 목록
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String list(Model model) throws Exception {
		
		logger.info("list");
		
		model.addAttribute("list",service.list());
		
		return "home";
	}
	
	//글 작성get
	@RequestMapping(value = "/register", method = RequestMethod.GET)
	public void getRegister() throws Exception {
		logger.info("get register");
	}
	
	//글 작성post
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public String postRegister(HomeVO homeVO) throws Exception {
		logger.info("post register");
		
		service.register(homeVO);
		
		return "redirect:/";
	}
	
	//게시판 삭제
	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	public String delete(HomeVO homeVO) throws Exception{
		logger.info("delete");
		
		service.delete(homeVO.getBno());
		
		return "redirect:/";
	}
	
	//게시판 조회
	@RequestMapping(value = "/readView", method = RequestMethod.GET)
	public String read(HomeVO homeVO, Model model) throws Exception{
		logger.info("read");
			
		model.addAttribute("read", service.read(homeVO.getBno()));
			
		return "redirect:/";
	}
	
	//액셀 다운
//	@RequestMapping(value = "/adms/reserve/management/excelDown.do")
//	public void Excel(@ModelAttribute("searchVO") HomeVO homeVO, HttpServletRequest request, HttpServletResponse response, ModelMap model) throws Exception {
//	 
//	    service.getReserveExcel(homeVO, request, response);
//	 
//	}
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
//	@RequestMapping(value = "/", method = RequestMethod.GET)
//	public String home(Locale locale, Model model) {
//		logger.info("Welcome home! The client locale is {}.", locale);
//		
//		Date date = new Date();
//		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
//		
//		String formattedDate = dateFormat.format(date);
//		
//		model.addAttribute("serverTime", formattedDate );
//		
//		return "home";
//	}
	
	
}
