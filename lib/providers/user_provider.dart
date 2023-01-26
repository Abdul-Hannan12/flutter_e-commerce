import 'package:flutter/material.dart';
import 'package:my_e_com/models/user.dart';

class UserProvider extends ChangeNotifier {
  User _user = User('', '', '', '', '', '', '');

  User get user => _user;

  void setUser(String user) {
    _user = User.fromJson(user);
    notifyListeners();
  }
}
