var S = new Array (); 

//S[0] = '<%@ page contentType="text/html;charset=UTF-8" language="java" %>		<%@ taglib prefix="s" uri="/struts-tags" %>';                                                                        
S[1] = '<nav class="navbar navbar-custom navbar-fixed-top" role="navigation">                             ';
S[2] = '    <div class="container">                                                                       ';
S[3] = '                                                                                                  ';
S[4] = '        <!-- Logo -->                                                                             ';
S[5] = '        <div class="pull-left">                                                                   ';
S[6] = '            <a class="navbar-toggle" href="#" data-toggle="offcanvas"><i class="ti-menu"></i></a> ';
S[7] = '                                                                                                  ';
S[8] = '            <div class="logo-wrapper">                                                            ';
S[9] = '                <a class="logo" href="/"><img src="../assets/img/logo.png" alt="logo"></a>        ';
S[10] = '            </div>                                                                                ';
S[11] = '                                                                                                  ';
S[12] = '        </div>                                                                                    ';
S[13] = '        <!-- END Logo -->                                                                         ';
S[14] = '                                                                                                  ';
S[15] = '        <!-- User account -->                                                                     ';
S[16] = '        <div class="pull-right user-login">                                                       ';
S[17] = '            <a class="btn btn-sm btn-primary" href="/login"/>Login</a> or <a href="/signin"/>register</a>                                 ';
S[19] = '        </div>                                                                                    ';
S[20] = '        <!-- END User account -->                                                                 ';
S[21] = '                                                                                                  ';
S[22] = '        <!-- Navigation menu -->                                                                  ';
S[23] = '        <ul id="nav-menu-id" class="nav-menu">                                                    ';
S[24] = '            <li>                                                                                  ';
S[25] = '                <a href="/">Home</a>                                               ';
S[26] = '            </li>                                                                                 ';
S[27] = '            <li>                                                                                  ';
S[28] = '                <a href="#">Profile</a>                                                           ';
S[29] = '                <ul>                                                                              ';                                                  
S[31] = '                    <li><a href="profile.jsp">My profile</a></li>                        ';
S[32] = '                    <li><a href="employee-edit.jsp">Edit profile</a></li>                         ';
S[33] = '                    <li><a>Log out</a></li>                                                       ';
S[34] = '                </ul>                                                                             ';
S[35] = '            </li>                                                                                 ';
S[36] = '            <li>                                                                                  ';
S[37] = '                <a href="#">Resume</a>                                                            ';
S[38] = '                <ul>                                                                              ';
S[39] = '                    <li><a href="resume-list.jsp">Browse resumes</a></li>                                                ';
//S[40] = '                    <li><a href="employee-profile.jsp">Resume detail</a></li>                     ';
//S[41] = '                    <li><a href="resume.jsp">Create a resume</a></li>                             ';
S[42] = '                    <li><a href="resume-manage.jsp">Manage resumes</a></li>                              ';
S[43] = '                </ul>                                                                             ';
S[44] = '            </li>                                                                                 ';
S[45] = '            <li>                                                                                  ';
S[46] = '                <a href="#">Vacancy</a>                                                           ';
S[47] = '                <ul>                                                                              ';
S[48] = '                    <li><a href="vacancy-list.jsp">Browse vacancies</a></li>                                              ';
S[49] = '                    <li><a href="vacancy-manage.jsp">Manage vacancies</a></li>                           ';
S[50] = '                </ul>                                                                             ';
S[51] = '            </li>                                                                                 ';
S[52] = '            <li>                                                                                  ';
S[53] = '                <a href="#">Pages</a>                                                             ';
S[54] = '                <ul>                                                                              ';
S[55] = '                    <li><a href="about.jsp">About</a></li>                            ';
S[56] = '                    <li><a href="contact.jsp">Contact</a></li>                        ';
S[57] = '                    <li><a href="faq.jsp">FAQ</a></li>                                ';
S[58] = '                </ul>                                                                             ';
S[59] = '            </li>                                                                                 ';
S[60] = '			<li>                                                                                     ';
S[61] = '                <a href="admin.jsp">Admin</a>                                                          ';
/*S[62] = '                <ul>                                                                              ';
S[63] = '                    <li><a>Manage users</a></li>                                                  ';
S[64] = '                    <li><a>Manage resumes</a></li>                                                ';
S[65] = '                    <li><a>Manage vacancies</a></li>                                              ';
S[66] = '                </ul>                                                                             ';*/
S[67] = '           </li>                                                                                 ';
S[68] = '        </ul>                                                                                     ';
S[69] = '        <!-- END Navigation menu -->                                                              ';
S[70] = '                                                                                                  ';
S[71] = '    </div>                                                                                        ';
S[72] = '</nav>                                                                                            ';
S[72] = '<!-- END Navigation bar -->                                                                       ';

with (document) {open (); write (S.join ('\n')); close ()}