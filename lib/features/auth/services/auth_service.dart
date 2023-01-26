import 'package:flutter/cupertino.dart';
import 'package:my_e_com/constants/error_handling.dart';
import 'package:my_e_com/constants/global_variables.dart';
import 'package:my_e_com/constants/utils.dart';
import 'package:my_e_com/models/user.dart';
import 'package:http/http.dart' as http;

class AuthService {
  // SIGN UP USER
  void signUpUser({
    required BuildContext context,
    required String email,
    required String password,
    required String name,
  }) async {
    try {
      User user = User('', name, email, password, '', '', '');

      http.Response res = await http.post(Uri.parse('$uri/api/signup'),
          body: user.toJson(),
          headers: <String, String>{
            'Content-Type': 'application/json; charset=UTF-8'
          });

      httpErrorHandle(
          response: res,
          context: context,
          onSuccess: () {
            showSnackBar(
                context, 'Account created! Login with the same credentials.');
          });
    } catch (e) {
      showSnackBar(context, e.toString());
    }
  }
}
