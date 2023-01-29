import 'package:flutter/material.dart';
import 'package:my_e_com/constants/global_variables.dart';
import 'package:my_e_com/providers/user_provider.dart';
import 'package:provider/provider.dart';

class BelowAppBar extends StatelessWidget {
  const BelowAppBar({super.key});

  @override
  Widget build(BuildContext context) {
    final user = Provider.of<UserProvider>(context).user;
    return Container(
      width: double.infinity,
      decoration: const BoxDecoration(
        gradient: GlobalVariables.appBarGradient,
      ),
      padding: const EdgeInsets.fromLTRB(10, 0, 10, 10),
      child: RichText(
        text: TextSpan(
          text: 'Hello, ',
          style: const TextStyle(
            fontSize: 22,
            color: Colors.black,
          ),
          children: [
            TextSpan(
              text: user.name,
              style: const TextStyle(
                fontSize: 22,
                color: Colors.black,
                fontWeight: FontWeight.w600,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
